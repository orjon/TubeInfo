import { useSyncExternalStore } from 'react'
import { COLOURS } from './favourites'

// The colour of favourites last looked at on the favourites page, kept so the page opens
// on the same one next time. Same naming as the favourites' own key.
const KEY = 'setoff.favourites.colour.v1'

const read = () => {
  try {
    const saved = window.localStorage.getItem(KEY)
    return COLOURS.includes(saved) ? saved : COLOURS[0]
  } catch {
    return COLOURS[0] // storage blocked or missing (private window, tests)
  }
}

let current = read()
const listeners = new Set()

function save(colour) {
  current = colour
  try {
    window.localStorage.setItem(KEY, colour)
  } catch {
    // not saved: the choice lasts until the page is closed
  }
  listeners.forEach((l) => l())
}

function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

// Sets the colour directly (used by the tests to start from a known state)
export const setSelectedColour = save

export function useSelectedColour() {
  const colour = useSyncExternalStore(subscribe, () => current)
  return [colour, save]
}
