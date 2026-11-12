import { describe, it, expect, test } from 'vitest'
import { createRequire } from 'node:module'
import stoppoints from '../fixtures/stoppoints-victoria.json'
const require = createRequire(import.meta.url)
const { kebabCase, trimStationName, filterStationData } = require('../../lib/stationData')
const { stations: bundledStations } = require('../../initalValues/initialState')

describe('kebabCase', () => {
  it('lower-cases, joins words with dashes and drops apostrophes', () => {
    expect(kebabCase("King's Cross St. Pancras")).toBe('kings-cross-st.-pancras')
  })
})

describe('trimStationName', () => {
  it('removes "Underground Station" and the space left behind', () => {
    expect(trimStationName('Brixton Underground Station')).toBe('Brixton')
  })

  // KNOWN BUG: a name with a bracket keeps a trailing space ("Edgware Road "), which
  // also leaves a dash on the end of its URL. Remove `.fails` once it is fixed.
  it.fails('removes the bracketed part and the space before it', () => {
    expect(trimStationName('Edgware Road (Bakerloo) Underground Station')).toBe('Edgware Road')
  })
})

describe('filterStationData', () => {
  const kings = stoppoints.find((s) => s.id.includes('KXX') || /King/.test(s.commonName))
  const station = filterStationData(kings, 'victoria')

  it('builds the station record the client uses', () => {
    expect(station).toMatchObject({
      id: kings.id,
      key: kings.id,
      name: "King's Cross St. Pancras",
      url: 'kings-cross-st.-pancras',
      lines: ['victoria'],
      lat: kings.lat,
      lng: kings.lon
    })
  })

  it('keeps address, phone and zone as contact details, in that order', () => {
    expect(station.contact.map((c) => c.key)).toEqual(['Address', 'PhoneNo', 'Zone'])
  })

  it('keeps only facilities that exist (not "no" or "0")', () => {
    for (const facility of station.facilities) {
      expect(['no', '0']).not.toContain(facility.value)
      expect(facility.value).toBeDefined()
    }
  })

  it('does not fail on a station with no additional properties', () => {
    const bare = { id: 'x', commonName: 'Test Underground Station', lat: 1, lon: 2, additionalProperties: [] }
    expect(filterStationData(bare, 'victoria')).toMatchObject({ name: 'Test', contact: [], facilities: [] })
  })
})

describe('bundled station data', () => {
  // KNOWN BUG (same cause as above): 7 names end in a space, e.g. "Edgware Road ".
  test.fails('every station name has no leading or trailing space', () => {
    const bad = bundledStations.filter((s) => s.name !== s.name.trim())
    expect(bad.map((s) => s.name)).toEqual([])
  })

  // KNOWN BUG: two stations can share one URL (both Edgware Roads are
  // "edgware-road-", both Hammersmiths "hammersmith-"), so the second can never be
  // opened. Remove `.fails` once URLs are unique.
  test.fails('every station URL is unique', () => {
    const urls = bundledStations.map((s) => s.url)
    const duplicates = urls.filter((u, i) => urls.indexOf(u) !== i)
    expect(duplicates).toEqual([])
  })

  test('every station URL is lower case with no spaces', () => {
    for (const s of bundledStations) expect(s.url).toMatch(/^[^\sA-Z]+$/)
  })
})
