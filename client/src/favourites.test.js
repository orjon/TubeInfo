import { describe, it, expect } from 'vitest'
import { toggleFavourite, isFavourite, parseFavourites, groupByStation } from './favourites'

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

describe('groupByStation', () => {
  it('makes one group per station, in the order each station was first starred', () => {
    const list = [
      kx,
      { stationId: 'WPL', lineId: 'district', direction: 'Eastbound' },
      { stationId: 'KXX', lineId: 'victoria', direction: 'Southbound' }
    ]
    expect(groupByStation(list)).toEqual([
      {
        stationId: 'KXX',
        items: [
          { lineId: 'northern', direction: 'Northbound' },
          { lineId: 'victoria', direction: 'Southbound' }
        ]
      },
      { stationId: 'WPL', items: [{ lineId: 'district', direction: 'Eastbound' }] }
    ])
  })

  it('is empty for no favourites', () => {
    expect(groupByStation([])).toEqual([])
  })
})
