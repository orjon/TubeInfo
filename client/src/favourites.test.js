import { describe, it, expect } from 'vitest'
import { toggleFavourite, isFavourite, parseFavourites, groupByLine } from './favourites'

const kx = { stationId: 'KXX', lineId: 'northern', direction: 'Northbound' }

describe('toggleFavourite', () => {
  it('adds a favourite that is not there', () => {
    expect(toggleFavourite([], kx)).toEqual([kx])
  })

  it('removes one that is', () => {
    expect(toggleFavourite([kx], kx)).toEqual([])
  })

  it('treats another direction, line or station as a different favourite', () => {
    const list = toggleFavourite([kx], { ...kx, direction: 'Southbound' })
    expect(list).toHaveLength(2)
    expect(toggleFavourite(list, { ...kx, lineId: 'victoria' })).toHaveLength(3)
    expect(toggleFavourite(list, { ...kx, stationId: 'OTHER' })).toHaveLength(3)
  })

  it('does not change the list it was given', () => {
    const list = [kx]
    toggleFavourite(list, { ...kx, direction: 'Southbound' })
    expect(list).toHaveLength(1)
  })

  it('keeps only the three fields, whatever else is passed in', () => {
    expect(toggleFavourite([], { ...kx, junk: 1 })).toEqual([kx])
  })
})

describe('isFavourite', () => {
  it('finds a favourite by station, line and direction', () => {
    expect(isFavourite([kx], { ...kx })).toBe(true)
    expect(isFavourite([kx], { ...kx, direction: 'Southbound' })).toBe(false)
  })
})

describe('parseFavourites', () => {
  it('reads back what was saved', () => {
    expect(parseFavourites(JSON.stringify([kx]))).toEqual([kx])
  })

  it.each([[null], [''], ['not json'], ['{"a":1}'], ['42'], [undefined]])(
    'gives an empty list for unreadable text (%s)',
    (text) => {
      expect(parseFavourites(text)).toEqual([])
    }
  )

  it('leaves out items that are wrong or have no direction, and repeats', () => {
    const saved = JSON.stringify([kx, { stationId: 'A' }, null, 7, { ...kx, direction: '' }, kx])
    expect(parseFavourites(saved)).toEqual([kx])
  })
})

describe('groupByLine', () => {
  const list = [
    { stationId: 'BBB', lineId: 'hammersmith-city', direction: 'Eastbound' },
    kx,
    { stationId: 'BST', lineId: 'hammersmith-city', direction: 'Westbound' },
    { stationId: 'BBB', lineId: 'hammersmith-city', direction: 'Westbound' }
  ]

  it('makes one group per line, and inside it one entry per station', () => {
    expect(groupByLine(list)).toEqual([
      {
        lineId: 'hammersmith-city',
        stations: [
          { stationId: 'BBB', directions: ['Eastbound', 'Westbound'] },
          { stationId: 'BST', directions: ['Westbound'] }
        ]
      },
      { lineId: 'northern', stations: [{ stationId: 'KXX', directions: ['Northbound'] }] }
    ])
  })

  it('names a station once even when two of its directions are starred', () => {
    const [hc] = groupByLine(list)
    expect(hc.stations.filter((s) => s.stationId === 'BBB')).toHaveLength(1)
  })

  it('does not mix the same station on two different lines', () => {
    const both = groupByLine([
      { stationId: 'KXX', lineId: 'northern', direction: 'Northbound' },
      { stationId: 'KXX', lineId: 'victoria', direction: 'Northbound' }
    ])
    expect(both.map((l) => l.lineId)).toEqual(['northern', 'victoria'])
  })

  it('is empty for no favourites', () => {
    expect(groupByLine([])).toEqual([])
  })
})
