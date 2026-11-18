// Favourites: a direction of a line at a station, e.g. King's Cross, Northern, Northbound,
// with a colour. Each one is { stationId, lineId, direction, colour }. These are plain
// functions on a list; the store that keeps the list in the browser is in favouritesStore.js.

// In the order the star cycles through them. A saved favourite with no colour (from
// before colours existed) is read as the first one.
export const COLOURS = ['yellow', 'green', 'blue', 'red']
const DEFAULT_COLOUR = COLOURS[0]

const same = (a, b) =>
  a.stationId === b.stationId && a.lineId === b.lineId && a.direction === b.direction

const isFavourite = (list, f) => list.some((x) => same(x, f))

// The favourite's colour, or null when it is not in the list
export const favouriteColour = (list, f) => list.find((x) => same(x, f))?.colour ?? null

const valid = (f) =>
  f &&
  typeof f.stationId === 'string' &&
  typeof f.lineId === 'string' &&
  typeof f.direction === 'string' &&
  f.direction !== ''

const clean = (f) => ({
  stationId: f.stationId,
  lineId: f.lineId,
  direction: f.direction,
  colour: COLOURS.includes(f.colour) ? f.colour : DEFAULT_COLOUR
})

// The colour after `colour` when the star is tapped: none -> yellow -> ... -> red -> none
export const nextColour = (colour) => {
  if (colour === null) return DEFAULT_COLOUR
  const i = COLOURS.indexOf(colour)
  return i === COLOURS.length - 1 ? null : COLOURS[i + 1]
}

export const removeFavourite = (list, f) => list.filter((x) => !same(x, f))

// Moves the favourite on to its next colour, adding it at the first colour and removing
// it after the last. A favourite changing colour keeps its place in the list.
export function cycleFavourite(list, favourite) {
  const next = nextColour(favouriteColour(list, favourite))
  if (next === null) return removeFavourite(list, favourite)
  if (!isFavourite(list, favourite)) return [...list, clean({ ...favourite, colour: next })]
  return list.map((x) => (same(x, favourite) ? { ...x, colour: next } : x))
}

export const withColour = (list, colour) => list.filter((f) => f.colour === colour)

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
