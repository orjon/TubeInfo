// Favourites: a direction of a line at a station, e.g. King's Cross, Northern, Northbound.
// Each one is { stationId, lineId, direction }. These are plain functions on a list;
// the store that keeps the list in the browser is in favouritesStore.js.

const isFavourite = (list, f) => list.some((x) => same(x, f))

const same = (a, b) =>
  a.stationId === b.stationId && a.lineId === b.lineId && a.direction === b.direction

const valid = (f) =>
  f &&
  typeof f.stationId === 'string' &&
  typeof f.lineId === 'string' &&
  typeof f.direction === 'string' &&
  f.direction !== ''

const clean = (f) => ({ stationId: f.stationId, lineId: f.lineId, direction: f.direction })

// Adds the favourite if it is not there, removes it if it is.
export function toggleFavourite(list, favourite) {
  return isFavourite(list, favourite)
    ? list.filter((x) => !same(x, favourite))
    : [...list, clean(favourite)]
}

export { isFavourite }

// Reads the saved text back into a list. Anything unreadable or wrong gives an empty
// list or leaves the bad items out, so a corrupt save never breaks the page.
export function parseFavourites(text) {
  try {
    const items = JSON.parse(text)
    if (!Array.isArray(items)) return []
    const list = []
    for (const item of items) {
      if (valid(item) && !isFavourite(list, item)) list.push(clean(item))
    }
    return list
  } catch {
    return []
  }
}

// The favourites page has one block per line. Inside it each station appears once, with
// all of its starred directions under it. Lines, stations and directions are all in the
// order they were first starred.
export function groupByLine(list) {
  const lines = []
  for (const f of list) {
    let line = lines.find((l) => l.lineId === f.lineId)
    if (!line) {
      line = { lineId: f.lineId, stations: [] }
      lines.push(line)
    }
    let station = line.stations.find((s) => s.stationId === f.stationId)
    if (!station) {
      station = { stationId: f.stationId, directions: [] }
      line.stations.push(station)
    }
    station.directions.push(f.direction)
  }
  return lines
}
