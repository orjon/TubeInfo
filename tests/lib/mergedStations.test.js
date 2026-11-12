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

describe('mergeStations by TfL hub code', () => {
  const stop = (id, name, lines, hub, lat = 51, lng = -0.1) => ({
    key: id, id, url: name, name, lines, lat, lng, hub,
    contact: [{ key: 'Address', value: id }], facilities: []
  })
  const stations = [
    stop('940GZZLUWPL', 'Whitechapel', ['district'], 'HUBZWL'),
    stop('910GWCHAPXR', 'Whitechapel', ['elizabeth'], 'HUBZWL'),
    stop('910GLIVST', 'London Liverpool Street', ['elizabeth'], 'HUBLST'),
    stop('940GZZLULVT', 'Liverpool Street', ['central', 'circle'], 'HUBLST'),
    stop('940GZZLUBRX', 'Brixton', ['victoria'], undefined),
    stop('940GZZLUOXC', 'Oxford Circus', ['victoria'], 'HUBOXC') // alone in its hub
  ]
  const lines = [
    { id: 'district', stations: [{ id: '940GZZLUWPL' }] },
    { id: 'elizabeth', stations: [{ id: '910GWCHAPXR' }, { id: '910GLIVST' }] },
    { id: 'victoria', stations: [{ id: '940GZZLUBRX' }, { id: '940GZZLUOXC' }] }
  ]
  const result = mergeStations(stations, lines, [])

  it('merges stops that share a hub code and leaves others alone', () => {
    expect(result.stations.map((s) => s.name).sort()).toEqual(['Brixton', 'Liverpool Street', 'Oxford Circus', 'Whitechapel'])
  })

  it('takes the Tube stop as the main one, so the name is the Tube name', () => {
    const liverpool = result.stations.find((s) => s.name === 'Liverpool Street')
    expect(liverpool.id).toBe('940GZZLULVT')
    expect(liverpool.ids.sort()).toEqual(['910GLIVST', '940GZZLULVT'])
    expect(liverpool.lines).toEqual(['central', 'circle', 'elizabeth'])
  })

  it('works out the URL from the name', () => {
    expect(result.stations.find((s) => s.name === 'Liverpool Street').url).toBe('liverpool-street')
  })

  it('moves the Elizabeth line stop onto the main stop', () => {
    expect(result.lineStations.find((l) => l.id === 'elizabeth').stations).toEqual([
      { id: '940GZZLUWPL' },
      { id: '940GZZLULVT' }
    ])
  })

  it('removes a bracketed suffix from a merged station\'s name', () => {
    const merged = mergeStations(
      [stop('A', 'Foo (Blue Line)', ['blue'], 'H1'), stop('B', 'Foo (Red Line)', ['red'], 'H1')],
      [], []
    )
    expect(merged.stations[0].name).toBe('Foo')
  })

  it('fills in contact details the main stop lacks from the other stops', () => {
    const merged = mergeStations(
      [
        { ...stop('940GZZLUA', 'A', ['blue'], 'H'), contact: [{ key: 'Address', value: 'main' }] },
        { ...stop('910GA', 'A', ['red'], 'H'), contact: [{ key: 'Address', value: 'other' }, { key: 'Zone', value: '2' }] }
      ],
      [], []
    )
    expect(merged.stations[0].contact).toEqual([{ key: 'Address', value: 'main' }, { key: 'Zone', value: '2' }])
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
