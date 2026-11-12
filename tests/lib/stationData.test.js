import { describe, it, expect, test } from 'vitest'
import { createRequire } from 'node:module'
import stoppoints from '../fixtures/stoppoints-victoria.json'
const require = createRequire(import.meta.url)
const { kebabCase, trimStationName, filterStationData } = require('../../lib/stationData')

describe('kebabCase', () => {
  it('lower-cases, joins words with dashes and drops apostrophes', () => {
    expect(kebabCase("King's Cross St. Pancras")).toBe('kings-cross-st.-pancras')
  })

  it('drops brackets and never ends in a dash', () => {
    expect(kebabCase('Kensington (Olympia)')).toBe('kensington-olympia')
    expect(kebabCase('Hammersmith ')).toBe('hammersmith')
  })
})

describe('trimStationName', () => {
  it('removes "Underground Station" and the space left behind', () => {
    expect(trimStationName('Brixton Underground Station')).toBe('Brixton')
  })

  it('keeps text in brackets, so Kensington (Olympia) is not confused with High Street Kensington', () => {
    expect(trimStationName('Kensington (Olympia) Underground Station')).toBe('Kensington (Olympia)')
  })

  it('removes "Rail Station", "DLR Station" and "Tram Stop" too', () => {
    expect(trimStationName('Abbey Wood Rail Station')).toBe('Abbey Wood')
    expect(trimStationName('Canary Wharf DLR Station')).toBe('Canary Wharf')
    expect(trimStationName('Wimbledon Tram Stop')).toBe('Wimbledon')
  })

  it('never leaves a space at either end', () => {
    expect(trimStationName('  Edgware Road (Bakerloo) Underground Station ')).toBe('Edgware Road (Bakerloo)')
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

  it('matches facility names however TfL capitalises them ("Help points", "Boarding Ramps")', () => {
    const rail = {
      id: 'x', commonName: 'Test Rail Station', lat: 1, lon: 2, hubNaptanCode: 'HUBTST',
      additionalProperties: [
        { key: 'Help points', value: 'yes' },
        { key: 'Boarding Ramps', value: 'yes' },
        { key: 'Car Park', value: '0' }
      ]
    }
    const result = filterStationData(rail, 'elizabeth')
    expect(result.facilities.map((f) => f.key)).toEqual(['Help Points', 'Boarding Ramp'])
    expect(result.hub).toBe('HUBTST')
  })

  it('does not fail on a station with no additional properties', () => {
    const bare = { id: 'x', commonName: 'Test Underground Station', lat: 1, lon: 2, additionalProperties: [] }
    expect(filterStationData(bare, 'victoria')).toMatchObject({ name: 'Test', contact: [], facilities: [] })
  })
})
