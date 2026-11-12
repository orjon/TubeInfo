import { describe, it, expect } from 'vitest'
import { findLine, findLineName, formatDueIn, formatTime, groupArrivals } from './Helpers'

describe('formatDueIn', () => {
  const now = new Date('2026-01-01T10:00:00Z').getTime()
  const at = (seconds) => new Date(now + seconds * 1000).toISOString()

  it.each([
    [-30, 'overdue'],
    [-1, 'overdue'],
    [0, 'due'],
    [59, 'due'],
    [60, '1 min'],
    [119, '1 min'],
    [120, '2 mins'],
    [600, '10 mins']
  ])('%i seconds from now is "%s"', (seconds, expected) => {
    expect(formatDueIn(at(seconds), now)).toBe(expected)
  })
})

describe('findLine and findLineName', () => {
  const statuses = [
    { id: 'victoria', name: 'Victoria' },
    { id: 'hammersmith-city', name: 'Hammersmith & City' }
  ]

  it('finds a line by id', () => {
    expect(findLine(statuses, 'victoria')).toEqual(statuses[0])
  })

  it('returns undefined for an unknown line', () => {
    expect(findLine(statuses, 'nope')).toBeUndefined()
  })

  it('gives the line name, or the id when the line is not known yet', () => {
    expect(findLineName(statuses, 'hammersmith-city')).toBe('Hammersmith & City')
    expect(findLineName(statuses, 'elizabeth')).toBe('elizabeth')
  })
})

describe('formatTime', () => {
  it('formats as HH:mm:ss in local time, with leading zeros', () => {
    expect(formatTime(new Date(2026, 10, 12, 9, 5, 3).toISOString())).toBe('09:05:03')
  })
})

describe('groupArrivals', () => {
  const arrival = (lineId, direction, platform, minutes) => ({
    lineId, direction, platform, towards: 'x', expected: `2026-01-01T10:0${minutes}:00Z`
  })

  it('keeps only the one line', () => {
    const groups = groupArrivals([arrival('circle', 'Eastbound', '1', 1), arrival('district', 'Eastbound', '1', 2)], 'circle')
    expect(groups.flatMap((g) => g.arrivals).map((a) => a.lineId)).toEqual(['circle'])
  })

  it('orders directions North, East, South, West, Inner, Outer', () => {
    const groups = groupArrivals(
      ['Westbound', 'Southbound', 'Northbound', 'Eastbound'].map((d, i) => arrival('x', d, '1', i)),
      'x'
    )
    expect(groups.map((g) => g.direction)).toEqual(['Northbound', 'Eastbound', 'Southbound', 'Westbound'])
  })

  it('splits one direction into a group for each platform, in platform order', () => {
    const groups = groupArrivals(
      [arrival('circle', 'Eastbound', '15', 1), arrival('circle', 'Eastbound', '2', 2), arrival('circle', 'Eastbound', '15', 3)],
      'circle'
    )
    expect(groups.map((g) => [g.platform, g.arrivals.length])).toEqual([['2', 1], ['15', 2]])
  })

  it('keeps the first five of each group', () => {
    const many = Array.from({ length: 8 }, (_, i) => arrival('x', 'Northbound', '1', i))
    expect(groupArrivals(many, 'x')[0].arrivals).toHaveLength(5)
  })

  it('leaves out arrivals with a direction the page does not know', () => {
    expect(groupArrivals([arrival('x', '', '1', 1)], 'x')).toEqual([])
  })
})
