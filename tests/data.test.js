import { describe, it, expect } from 'vitest'
import stations from '../data/stations.json'
import lineStations from '../data/lineStations.json'

// data/ is what the app starts with. `pnpm refresh-data` rebuilds it from TfL.
describe('data/stations.json and data/lineStations.json', () => {
  it('has a unique URL for every station', () => {
    const urls = stations.map((s) => s.url)
    expect(urls.filter((u, i) => urls.indexOf(u) !== i)).toEqual([])
  })

  it('has no station name with a space at either end, and no URL ending in a dash', () => {
    expect(stations.filter((s) => s.name !== s.name.trim()).map((s) => s.name)).toEqual([])
    expect(stations.filter((s) => /-$/.test(s.url)).map((s) => s.url)).toEqual([])
  })

  it('URLs are lower case with no spaces', () => {
    for (const s of stations) expect(s.url).toMatch(/^[^\sA-Z]+$/)
  })

  it('has each of the three merged stations once, serving the lines of both stops', () => {
    const find = (name) => stations.filter((s) => s.name === name)
    expect(find('Edgware Road')).toHaveLength(1)
    expect(find('Hammersmith')).toHaveLength(1)
    expect(find('Paddington')).toHaveLength(1)
    expect(find('Edgware Road')[0].lines).toEqual(['bakerloo', 'circle', 'district', 'hammersmith-city'])
    expect(find('Paddington')[0].ids).toHaveLength(4) // two Tube stops, two Elizabeth line stops
  })

  it('covers the Elizabeth line, merged with the Tube at shared stations', () => {
    const line = lineStations.find((l) => l.id === 'elizabeth')
    expect(line.stations.length).toBeGreaterThan(35)
    const whitechapel = stations.find((s) => s.name === 'Whitechapel')
    expect(whitechapel.lines).toEqual(expect.arrayContaining(['district', 'elizabeth', 'hammersmith-city']))
    expect(stations.filter((s) => s.name === 'Whitechapel')).toHaveLength(1)
  })

  it('every station is on at least one line, and every line stop is a station', () => {
    const ids = new Set(stations.map((s) => s.id))
    const onALine = new Set(lineStations.flatMap((l) => l.stations.map((x) => x.id)))
    expect(stations.filter((s) => !onALine.has(s.id)).map((s) => s.name)).toEqual([])
    expect([...onALine].filter((id) => !ids.has(id))).toEqual([])
  })

  it('a station lists exactly the lines whose stops include it', () => {
    for (const s of stations) {
      const lines = lineStations.filter((l) => l.stations.some((x) => x.id === s.id)).map((l) => l.id)
      expect(lines.sort(), s.name).toEqual([...s.lines].sort())
    }
  })

  it('lists each station once per line', () => {
    for (const line of lineStations) {
      const ids = line.stations.map((x) => x.id)
      expect(new Set(ids).size, line.id).toBe(ids.length)
    }
  })
})
