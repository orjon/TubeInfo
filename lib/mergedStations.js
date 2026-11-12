// Some stations are two separate stops in TfL's data, a few hundred metres apart,
// with the same name (Edgware Road, Hammersmith, Paddington). Passengers think of
// each as one station, so they are merged into one record here.
//
// The list is written out by hand because there are only a few and they never change.
// `primary` is the stop whose address and phone number are kept (the busiest one).
const MERGED_STATIONS = [
  {
    name: 'Edgware Road',
    url: 'edgware-road',
    primary: '940GZZLUERC',
    ids: ['940GZZLUERC', '940GZZLUERB']
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

// stations: full records. lineStations: [{ id: lineId, stations: [{ id }] }].
// Returns new arrays; the inputs are not changed.
function mergeStations(stations, lineStations, rules = MERGED_STATIONS) {
  let mergedStations = [...stations]
  let mergedLineStations = lineStations.map((line) => ({
    ...line,
    stations: [...line.stations]
  }))

  for (const rule of rules) {
    const members = rule.ids
      .map((id) => mergedStations.find((s) => s.id === id))
      .filter(Boolean)
    if (members.length < 2) continue // nothing to merge (e.g. only one stop is served)

    const primary = members.find((s) => s.id === rule.primary) ?? members[0]
    const facilities = []
    for (const stop of [primary, ...members.filter((s) => s !== primary)]) {
      for (const facility of stop.facilities) {
        if (!facilities.some((f) => f.key === facility.key)) facilities.push(facility)
      }
    }

    const merged = {
      ...primary,
      name: rule.name,
      url: rule.url,
      ids: members.map((s) => s.id),
      lines: [...new Set(members.flatMap((s) => s.lines))].sort(),
      lat: round6(members.reduce((sum, s) => sum + s.lat, 0) / members.length),
      lng: round6(members.reduce((sum, s) => sum + s.lng, 0) / members.length),
      facilities
    }

    // the merged record takes the primary stop's place; the other stops go
    mergedStations = mergedStations
      .filter((s) => !merged.ids.includes(s.id) || s.id === primary.id)
      .map((s) => (s.id === primary.id ? merged : s))

    // lines list stations by id: point the other stops at the primary, once per line
    mergedLineStations = mergedLineStations.map((line) => {
      const seen = new Set()
      const stops = []
      for (const stop of line.stations) {
        const id = merged.ids.includes(stop.id) ? primary.id : stop.id
        if (!seen.has(id)) {
          seen.add(id)
          stops.push({ id })
        }
      }
      return { ...line, stations: stops }
    })
  }

  return { stations: mergedStations, lineStations: mergedLineStations }
}

module.exports = { MERGED_STATIONS, mergeStations }
