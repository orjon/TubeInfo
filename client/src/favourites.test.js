import { describe, it, expect } from 'vitest'
import {
  COLOURS,
  cycleFavourite,
  removeFavourite,
  nextColour,
  favouriteColour,
  withColour,
  isFavourite,
  parseFavourites,
  groupByLine
} from './favourites'

const kx = { stationId: 'KXX', lineId: 'northern', direction: 'Northbound' }
const yellowKx = { ...kx, colour: 'yellow' }

describe('nextColour', () => {
  it('goes none, yellow, green, blue, red, none', () => {
    const seen = []
    let colour = null
    for (let i = 0; i <= COLOURS.length; i++) {
      colour = nextColour(colour)
      seen.push(colour)
    }
    expect(seen).toEqual(['yellow', 'green', 'blue', 'red', null])
  })
})

describe('cycleFavourite', () => {
  it('adds a favourite that is not there, as yellow', () => {
    expect(cycleFavourite([], kx)).toEqual([yellowKx])
  })

  it('moves one that is there on to the next colour, keeping its place', () => {
    const other = { ...kx, direction: 'Southbound', colour: 'red' }
    const list = cycleFavourite([yellowKx, other], kx)
    expect(list).toEqual([{ ...kx, colour: 'green' }, other])
  })

  it('removes one that is red', () => {
    expect(cycleFavourite([{ ...kx, colour: 'red' }], kx)).toEqual([])
  })

  it('treats another direction, line or station as a different favourite', () => {
    const list = cycleFavourite([yellowKx], { ...kx, direction: 'Southbound' })
    expect(list).toHaveLength(2)
    expect(cycleFavourite(list, { ...kx, lineId: 'victoria' })).toHaveLength(3)
    expect(cycleFavourite(list, { ...kx, stationId: 'OTHER' })).toHaveLength(3)
  })

  it('does not change the list it was given', () => {
    const list = [yellowKx]
    cycleFavourite(list, kx)
    cycleFavourite(list, { ...kx, direction: 'Southbound' })
    expect(list).toEqual([yellowKx])
  })

  it('keeps only the four fields, whatever else is passed in', () => {
    expect(cycleFavourite([], { ...kx, junk: 1 })).toEqual([yellowKx])
  })
})

describe('removeFavourite', () => {
  it('takes the favourite out whatever its colour, leaving the others', () => {
    const other = { ...kx, direction: 'Southbound', colour: 'yellow' }
    expect(removeFavourite([{ ...kx, colour: 'blue' }, other], kx)).toEqual([other])
  })

  it('does nothing when it is not there', () => {
    expect(removeFavourite([yellowKx], { ...kx, direction: 'Southbound' })).toEqual([yellowKx])
  })
})

describe('favouriteColour and isFavourite', () => {
  it('find a favourite by station, line and direction', () => {
    expect(isFavourite([yellowKx], { ...kx })).toBe(true)
    expect(isFavourite([yellowKx], { ...kx, direction: 'Southbound' })).toBe(false)
    expect(favouriteColour([{ ...kx, colour: 'blue' }], kx)).toBe('blue')
    expect(favouriteColour([yellowKx], { ...kx, direction: 'Southbound' })).toBeNull()
  })
})

describe('withColour', () => {
  it('keeps only the favourites of that colour, in order', () => {
    const a = { ...kx, colour: 'green' }
    const b = { ...kx, direction: 'Southbound', colour: 'blue' }
    const c = { ...kx, lineId: 'victoria', colour: 'green' }
    expect(withColour([a, b, c], 'green')).toEqual([a, c])
    expect(withColour([a, b, c], 'red')).toEqual([])
  })
})

describe('parseFavourites', () => {
  it('reads back what was saved', () => {
    const blue = { ...kx, colour: 'blue' }
    expect(parseFavourites(JSON.stringify([blue]))).toEqual([blue])
  })

  it('reads a favourite saved before there were colours as yellow', () => {
    expect(parseFavourites(JSON.stringify([kx]))).toEqual([yellowKx])
  })

  it('reads an unknown colour as yellow', () => {
    expect(parseFavourites(JSON.stringify([{ ...kx, colour: 'pink' }]))).toEqual([yellowKx])
  })

  it.each([[null], [''], ['not json'], ['{"a":1}'], ['42'], [undefined]])(
    'gives an empty list for unreadable text (%s)',
    (text) => {
      expect(parseFavourites(text)).toEqual([])
    }
  )

  it('leaves out items that are wrong or have no direction, and repeats', () => {
    const saved = JSON.stringify([kx, { stationId: 'A' }, null, 7, { ...kx, direction: '' }, kx])
    expect(parseFavourites(saved)).toEqual([yellowKx])
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
