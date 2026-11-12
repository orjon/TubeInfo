import { useSyncExternalStore } from 'react'
import { parseFavourites, toggleFavourite, isFavourite } from './favourites'

// All the sites on orjon.com share one browser storage, so the key is specific to this
// app and does not use the display name, which can change.
const KEY = 'setoff.favourites.v1'

const read = () => {
  try {
    return parseFavourites(window.localStorage.getItem(KEY))
  } catch {
    return [] // storage blocked or missing (private window, tests)
  }
}

let current = read() // also kept in memory, so the stars still work if saving fails
const listeners = new Set()

const notify = () => listeners.forEach((l) => l())

function save(list) {
  current = list
  try {
    window.localStorage.setItem(KEY, JSON.stringify(list))
  } catch {
    // not saved: the favourites last until the page is closed
  }
  notify()
}

function subscribe(listener) {
  listeners.add(listener)
  // another tab or window changed them
  const onStorage = (event) => {
    if (event.key === KEY || event.key === null) {
      current = read()
      notify()
    }
  }
  window.addEventListener('storage', onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', onStorage)
  }
}

// Replaces the whole list (used by the tests to start from a known state)
export const setFavourites = save

export function useFavourites() {
  const favourites = useSyncExternalStore(subscribe, () => current)
  return {
    favourites,
    isFavourite: (f) => isFavourite(favourites, f),
    toggle: (f) => save(toggleFavourite(current, f))
  }
}
