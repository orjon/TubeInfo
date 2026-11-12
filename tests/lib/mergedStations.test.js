import { describe, it, expect } from 'vitest'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const { MERGED_STATIONS, mergeStations } = require('../../lib/mergedStations')

const station = (id, name, lines, lat, lng, facilities = []) => ({
  key: id, id, url: name.toLowerCase(), name, lines, lat, lng,
  contact: [{ key: 'Address', value: `${id} address` }],
  facilities: facilities.map((key) => ({ key, value: 'yes' }))
})

const rule = [{ name: 'Testville', url: 'testville', primary: 'A', ids: ['A', 'B'] }]
const stations = [
  station('A', 'Testville (Blue Line)', ['blue', 'green'], 51.0, -0.2, ['Lifts', 'WiFi']),
  station('Z', 'Elsewhere', ['blue'], 52, -1),
  station('B', 'Testville (Red Line)', ['green', 'red'], 51.002, -0.204, ['WiFi', 'Toilets'])
]
const lineStations = [
  { id: 'blue', stations: [{ id: 'A' }, { id: 'Z' }] },
  { id: 'green', stations: [{ id: 'A' }, { id: 'B' }] }, // lists BOTH stops
  { id: 'red', stations: [{ id: 'B' }] }
]

describe('mergeStations', () => {
  const merged = mergeStations(stations, lineStations, rule)
  const testville = merged.stations.find((s) => s.name === 'Testville')

  it('replaces the stops with one station, in the primary stop\'s place', () => {
    expect(merged.stations.map((s) => s.name)).toEqual(['Testville', 'Elsewhere'])
  })

  it('gives it the clean name and URL and keeps the primary stop\'s id and contact details', () => {
    expect(testville).toMatchObject({ id: 'A', url: 'testville', contact: stations[0].contact })
  })

  it('keeps every stop id, for asking TfL about arrivals', () => {
    expect(testville.ids).toEqual(['A', 'B'])
  })

  it('serves the union of the lines, sorted', () => {
    expect(testville.lines).toEqual(['blue', 'green', 'red'])
  })

  it('puts the station at the midpoint of the stops', () => {
    expect(testville.lat).toBeCloseTo(51.001, 6)
    expect(testville.lng).toBeCloseTo(-0.202, 6)
  })

  it('combines facilities without repeating any', () => {
    expect(testville.facilities.map((f) => f.key)).toEqual(['Lifts', 'WiFi', 'Toilets'])
  })

  it('points every line at the primary stop, listing the station once per line', () => {
    expect(merged.lineStations).toEqual([
      { id: 'blue', stations: [{ id: 'A' }, { id: 'Z' }] },
      { id: 'green', stations: [{ id: 'A' }] },
      { id: 'red', stations: [{ id: 'A' }] }
    ])
  })

  it('does not change what it was given', () => {
    expect(stations).toHaveLength(3)
    expect(lineStations[1].stations).toHaveLength(2)
  })

  it('leaves things alone when only one of the stops exists', () => {
    const result = mergeStations(stations.filter((s) => s.id !== 'B'), lineStations, rule)
    expect(result.stations.find((s) => s.id === 'A').name).toBe('Testville (Blue Line)')
  })
})

describe('the list of merged stations', () => {
  it('has Edgware Road, Hammersmith and Paddington', () => {
    expect(MERGED_STATIONS.map((m) => m.name)).toEqual(['Edgware Road', 'Hammersmith', 'Paddington'])
  })
  it('names a primary stop that is one of its stops', () => {
    for (const m of MERGED_STATIONS) expect(m.ids).toContain(m.primary)
  })
})
