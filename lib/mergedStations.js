// TfL lists one real station as several stops when it is on several lines or
// networks (Paddington is four stops). This merges them into one station so
// passengers see one page, one map pin and every line's trains together.
//
// Stops are merged when:
//   - TfL gives them the same hub code (hubNaptanCode), or
//   - they are in MERGED_STATIONS below, for the few that have no hub code
// MERGED_STATIONS can also fix the name and URL and choose which stop's address
// and phone number to keep (`primary`, the busiest stop).
const { kebabCase } = require('./stationData')

const MERGED_STATIONS = [
  {
    name: 'Edgware Road',
    url: 'edgware-road',
    primary: '940GZZLUERC',
    ids: ['940GZZLUERC', '940GZZLUERB'] // no hub code
  },
  {
    name: 'Hammersmith',
    url: 'hammersmith',
    primary: '940GZZLUHSD',
    ids: ['940GZZLUHSD', '940GZZLUHSC']
  },
  {
    name: 'Paddington',
    url: 'paddington',
    primary: '940GZZLUPAC',
    ids: ['940GZZLUPAC', '940GZZLUPAH']
  }
]

const round6 = (n) => Math.round(n * 1e6) / 1e6
const isTubeStop = (s) => s.id.startsWith('940GZZLU')

// "Hammersmith (H&C Line)" -> "Hammersmith"
const withoutBrackets = (name) => name.replace(/\s*\(.*$/, '').trim()

// stations: full records. lineStations: [{ id: lineId, stations: [{ id }] }].
// Returns new arrays; the inputs are not changed.
function mergeStations(stations, lineStations, rules = MERGED_STATIONS) {
  // Work out which stops belong together (union-find over station ids)
  const parent = new Map(stations.map((s) => [s.id, s.id]))
  const find = (id) => {
    while (parent.get(id) !== id) id = parent.get(id)
    return id
  }
  const union = (a, b) => parent.set(find(b), find(a))

  const firstWithHub = new Map()
  for (const s of stations) {
    if (!s.hub) continue
    if (firstWithHub.has(s.hub)) union(firstWithHub.get(s.hub), s.id)
    else firstWithHub.set(s.hub, s.id)
  }
  for (const rule of rules) {
    const present = rule.ids.filter((id) => parent.has(id))
    present.slice(1).forEach((id) => union(present[0], id))
  }

  const groups = new Map()
  for (const s of stations) {
    const root = find(s.id)
    groups.set(root, [...(groups.get(root) ?? []), s])
  }

  const replaced = new Map() // old stop id -> id of the station that replaces it
  const mergedByPrimary = new Map()
  for (const members of groups.values()) {
    if (members.length < 2) continue

    const ids = members.map((s) => s.id)
    const rule = rules.find((r) => r.ids.some((id) => ids.includes(id)))
    const primary =
      members.find((s) => s.id === rule?.primary) ??
      [...members].filter(isTubeStop).sort((a, b) => b.lines.length - a.lines.length)[0] ??
      members[0]
    const others = members.filter((s) => s !== primary)

    const name = rule?.name ?? withoutBrackets(primary.name)
    const facilities = []
    for (const stop of [primary, ...others]) {
      for (const f of stop.facilities) {
        if (!facilities.some((x) => x.key === f.key)) facilities.push(f)
      }
    }
    const contact = []
    for (const stop of [primary, ...others]) {
      for (const c of stop.contact) {
        if (!contact.some((x) => x.key === c.key)) contact.push(c)
      }
    }

    mergedByPrimary.set(primary.id, {
      ...primary,
      name,
      url: rule?.url ?? kebabCase(name),
      ids,
      lines: [...new Set(members.flatMap((s) => s.lines))].sort(),
      lat: round6(members.reduce((sum, s) => sum + s.lat, 0) / members.length),
      lng: round6(members.reduce((sum, s) => sum + s.lng, 0) / members.length),
      contact,
      facilities
    })
    ids.forEach((id) => replaced.set(id, primary.id))
  }

  // the merged record takes the primary stop's place; the other stops go
  const mergedStations = stations
    .filter((s) => !replaced.has(s.id) || mergedByPrimary.has(s.id))
    .map((s) => mergedByPrimary.get(s.id) ?? s)

  // lines list stations by id: point the other stops at the primary, once per line
  const mergedLineStations = lineStations.map((line) => {
    const seen = new Set()
    const stops = []
    for (const stop of line.stations) {
      const id = replaced.get(stop.id) ?? stop.id
      if (!seen.has(id)) {
        seen.add(id)
        stops.push({ id })
      }
    }
    return { ...line, stations: stops }
  })

  return { stations: mergedStations, lineStations: mergedLineStations }
}

module.exports = { MERGED_STATIONS, mergeStations }
