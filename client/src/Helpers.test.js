import { describe, it, expect } from 'vitest'
import { findLine, findLineName, formatDueIn, formatTime } from './Helpers'

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
