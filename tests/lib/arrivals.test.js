import { describe, it, expect } from 'vitest'
import { createRequire } from 'node:module'
import arrivalsFixture from '../fixtures/arrivals-waterloo.json'
import elizabethFixture from '../fixtures/arrivals-elizabeth-paddington.json'
const require = createRequire(import.meta.url)
const { parseArrival, parseArrivals } = require('../../lib/arrivals')

describe('parseArrival', () => {
  it('splits direction and platform out of platformName', () => {
    const parsed = parseArrival({ ...arrivalsFixture[0], platformName: 'Eastbound - Platform 5' })
    expect(parsed.direction).toBe('Eastbound')
    expect(parsed.platform).toBe('5')
  })

  it('renames expectedArrival to expected and keeps the line and destination', () => {
    const raw = arrivalsFixture[0]
    expect(parseArrival(raw)).toEqual({
      lineName: raw.lineName,
      lineId: raw.lineId,
      platform: expect.any(String),
      destination: expect.any(String),
      towards: raw.towards,
      expected: raw.expectedArrival,
      direction: expect.any(String)
    })
  })

  it('gives empty direction and platform when there is no platformName', () => {
    const parsed = parseArrival({ lineName: 'X', lineId: 'x', expectedArrival: '2026-01-01T10:00:00Z' })
    expect(parsed.direction).toBe('')
    expect(parsed.platform).toBe('')
  })
})

describe('parseArrival, Elizabeth line and other rail arrivals', () => {
  // platformName is 'A' / 'B' / 'Platform 12', direction is 'inbound' / 'outbound'
  const [outbound, inbound, noDirection] = elizabethFixture.map(parseArrival)

  it('uses TfL\'s direction field when platformName has no compass point', () => {
    expect(outbound).toMatchObject({ direction: 'Outbound', platform: 'B' })
    expect(inbound).toMatchObject({ direction: 'Inbound', platform: 'A' })
  })

  it('leaves direction empty when TfL gives none, instead of dropping the arrival', () => {
    expect(noDirection).toMatchObject({ direction: '', platform: 'B' })
  })

  it('shows the destination when "towards" is empty, without "Rail Station"', () => {
    expect(outbound.towards).toBe('Heathrow Terminal 4')
    expect(inbound.towards).toBe('Abbey Wood')
  })

  it('takes the number out of "Platform 12" and ignores "Platform Unknown"', () => {
    const base = elizabethFixture[0]
    expect(parseArrival({ ...base, platformName: 'Platform 12' }).platform).toBe('12')
    expect(parseArrival({ ...base, platformName: 'Platform Unknown' }).platform).toBe('')
  })

  it('still reads Tube arrivals as before', () => {
    const tube = parseArrival({ ...arrivalsFixture[0], platformName: 'Westbound - Platform 1' })
    expect(tube).toMatchObject({ direction: 'Westbound', platform: '1' })
  })
})

describe('parseArrivals', () => {
  it('sorts soonest first', () => {
    const shuffled = [
      { ...arrivalsFixture[0], expectedArrival: '2026-01-01T10:05:00Z' },
      { ...arrivalsFixture[1], expectedArrival: '2026-01-01T10:01:00Z' },
      { ...arrivalsFixture[2], expectedArrival: '2026-01-01T10:03:00Z' }
    ]
    expect(parseArrivals(shuffled).map((a) => a.expected)).toEqual([
      '2026-01-01T10:01:00Z',
      '2026-01-01T10:03:00Z',
      '2026-01-01T10:05:00Z'
    ])
  })

  it('returns an empty list when nothing is due', () => {
    expect(parseArrivals([])).toEqual([])
  })
})
