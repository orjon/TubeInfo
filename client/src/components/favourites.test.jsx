// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent, within, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Station from './pages/Station'
import Favourites from './pages/Favourites'
import { setFavourites } from '../favouritesStore'

// The map needs a real browser (WebGL), and has nothing to do with favourites
vi.mock('./layout/Map', () => ({ default: () => <div>map</div> }))

const KX = { id: '940GZZLUKSX', url: 'kings-cross-st.-pancras', name: "King's Cross St. Pancras" }
const BBB = { id: '940GZZLUBBB', name: 'Bromley-by-Bow' }
const BST = { id: '940GZZLUBST', name: 'Baker Street' }
const soon = (minutes) => new Date(Date.now() + minutes * 60000).toISOString()
const arrival = (lineId, platformName, towards, minutes) => ({
  lineName: lineId, lineId, platformName, towards, destinationName: towards, expectedArrival: soon(minutes)
})

// TfL arrivals at King's Cross: Northern both ways, Victoria both ways
const ARRIVALS = [
  arrival('northern', 'Northbound - Platform 7', 'Edgware via Bank', 3),
  arrival('northern', 'Northbound - Platform 7', 'High Barnet via Bank', 6),
  arrival('northern', 'Southbound - Platform 8', 'Morden via Bank', 4),
  arrival('victoria', 'Southbound - Platform 4', 'Brixton', 2),
  arrival('victoria', 'Northbound - Platform 3', 'Walthamstow Central', 5),
  arrival('hammersmith-city', 'Eastbound - Platform 2', 'Barking', 2),
  arrival('hammersmith-city', 'Westbound - Platform 1', 'Hammersmith', 3)
]

function renderAt(path) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } })
  return render(
    <QueryClientProvider client={client}>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path='/station/:url' element={<Station />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )
}

beforeEach(() => {
  window.localStorage.clear()
  setFavourites([])
  window.scrollTo = () => {}
  vi.stubGlobal(
    'fetch',
    vi.fn(async (url) =>
      String(url).includes('/arrivals/')
        ? new Response(JSON.stringify({ stationId: KX.id, arrivals: ARRIVALS.map(toParsed), arrivalsTimeStamp: soon(0) }))
        : new Response('{}', { status: 500 }) // statuses and stations keep the bundled data
    )
  )
})
afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

// what the server sends: the parsed shape
function toParsed(a) {
  const [direction, platform] = a.platformName.split(' - Platform ')
  return { lineName: a.lineName, lineId: a.lineId, platform, destination: a.towards, towards: a.towards, expected: a.expectedArrival, direction }
}

const star = (name) => screen.findByRole('button', { name: new RegExp(name) })

describe('the star in front of a direction on a station page', () => {
  it('is there for every direction, off to begin with', async () => {
    renderAt(`/station/${KX.url}`)
    const northern = await star("King's Cross St. Pancras, Northern, Northbound")
    expect(northern.getAttribute('aria-pressed')).toBe('false')
    expect(await star("Northern, Southbound")).toBeTruthy()
    expect(await star("Victoria, Northbound")).toBeTruthy()
    expect(await star("Victoria, Southbound")).toBeTruthy()
  })

  it('adds the favourite when tapped and is filled afterwards', async () => {
    renderAt(`/station/${KX.url}`)
    const northern = await star("Northern, Northbound")
    fireEvent.click(northern)
    expect(northern.getAttribute('aria-pressed')).toBe('true')
    expect(JSON.parse(window.localStorage.getItem('setoff.favourites.v1'))).toEqual([
      { stationId: KX.id, lineId: 'northern', direction: 'Northbound' }
    ])
    // the other directions are untouched
    expect((await star('Northern, Southbound')).getAttribute('aria-pressed')).toBe('false')
  })

  it('removes it when tapped again', async () => {
    renderAt(`/station/${KX.url}`)
    const northern = await star('Northern, Northbound')
    fireEvent.click(northern)
    fireEvent.click(northern)
    expect(northern.getAttribute('aria-pressed')).toBe('false')
    expect(JSON.parse(window.localStorage.getItem('setoff.favourites.v1'))).toEqual([])
  })
})

describe('keeping the favourites in the browser', () => {
  const setStorageApi = (value) =>
    Object.defineProperty(navigator, 'storage', { value, configurable: true })
  afterEach(() => setStorageApi(undefined))

  it('asks the browser to keep the storage when something is starred', async () => {
    const persist = vi.fn(async () => true)
    setStorageApi({ persisted: async () => false, persist })
    renderAt(`/station/${KX.url}`)
    fireEvent.click(await star('Northern, Northbound'))
    await waitFor(() => expect(persist).toHaveBeenCalled())
  })

  it('does not ask if the browser already keeps it', async () => {
    const persist = vi.fn(async () => true)
    setStorageApi({ persisted: async () => true, persist })
    renderAt(`/station/${KX.url}`)
    fireEvent.click(await star('Northern, Northbound'))
    await new Promise((r) => setTimeout(r, 50))
    expect(persist).not.toHaveBeenCalled()
  })

  it('still saves the favourite when the browser does not have that feature', async () => {
    setStorageApi(undefined)
    renderAt(`/station/${KX.url}`)
    fireEvent.click(await star('Northern, Northbound'))
    expect(JSON.parse(window.localStorage.getItem('setoff.favourites.v1'))).toHaveLength(1)
  })

  it('still works when saving fails (storage blocked), until the page is closed', async () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked')
    })
    renderAt(`/station/${KX.url}`)
    const northern = await star('Northern, Northbound')
    fireEvent.click(northern)
    expect(northern.getAttribute('aria-pressed')).toBe('true') // the star still reflects it
    vi.restoreAllMocks()
  })
})

describe('the favourites page', () => {
  it('is one card titled Favourites, and says how to add one when there are none', () => {
    renderAt('/favourites')
    expect(screen.getAllByRole('heading', { level: 1 }).map((h) => h.textContent)).toEqual(['Favourites'])
    expect(screen.getByText(/No favourites yet/)).toBeTruthy()
  })

  it("shows the line, the station and that direction's trains for a starred direction", async () => {
    setFavourites([{ stationId: KX.id, lineId: 'northern', direction: 'Northbound' }])
    renderAt('/favourites')

    expect(await screen.findByText('Northern')).toBeTruthy() // the line is the heading
    expect(screen.getByRole('link', { name: "King's Cross St. Pancras" })).toBeTruthy()
    expect(screen.getByText('Northbound')).toBeTruthy()
    expect(await screen.findByText('Edgware via Bank')).toBeTruthy()
    expect(screen.getByText('High Barnet via Bank')).toBeTruthy()
    // only the starred direction: not Southbound, not the Victoria line
    expect(screen.queryByText('Morden via Bank')).toBeNull()
    expect(screen.queryByText('Brixton')).toBeNull()
  })

  it('is still only one h1, with the station name as a link and not a heading of its own', async () => {
    setFavourites([{ stationId: KX.id, lineId: 'northern', direction: 'Northbound' }])
    renderAt('/favourites')
    await screen.findByText('Edgware via Bank')
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('groups by line: two stations on one line sit under one line heading', async () => {
    setFavourites([
      { stationId: BBB.id, lineId: 'hammersmith-city', direction: 'Eastbound' },
      { stationId: BST.id, lineId: 'hammersmith-city', direction: 'Westbound' }
    ])
    renderAt('/favourites')

    expect(await screen.findAllByText('Hammersmith & City')).toHaveLength(1) // one heading
    expect(screen.getByRole('link', { name: BBB.name })).toBeTruthy()
    expect(screen.getByRole('link', { name: BST.name })).toBeTruthy()
    expect(screen.getByText('Eastbound')).toBeTruthy()
    expect(screen.getByText('Westbound')).toBeTruthy()
    expect(await screen.findByText('Barking')).toBeTruthy() // Eastbound trains
    expect(screen.getByText('Hammersmith')).toBeTruthy() // Westbound trains
  })

  it('names a station once when two of its directions are starred', async () => {
    setFavourites([
      { stationId: BBB.id, lineId: 'hammersmith-city', direction: 'Eastbound' },
      { stationId: BBB.id, lineId: 'hammersmith-city', direction: 'Westbound' }
    ])
    renderAt('/favourites')
    await screen.findByText('Barking')
    expect(screen.getAllByRole('link', { name: BBB.name })).toHaveLength(1) // not twice
    expect(screen.getByText('Eastbound')).toBeTruthy()
    expect(screen.getByText('Westbound')).toBeTruthy()
  })

  it('puts the station name above its directions, in the same style as the status', async () => {
    setFavourites([{ stationId: BBB.id, lineId: 'hammersmith-city', direction: 'Eastbound' }])
    renderAt('/favourites')
    const station = await screen.findByRole('link', { name: BBB.name })
    const direction = screen.getByText('Eastbound')
    // the station title is in a "status" row (the style of "Good Service") and comes first
    expect(station.closest('.status')).toBeTruthy()
    expect(station.compareDocumentPosition(direction) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('gives each line its own block, in the home page order', async () => {
    setFavourites([
      { stationId: KX.id, lineId: 'victoria', direction: 'Southbound' },
      { stationId: KX.id, lineId: 'northern', direction: 'Northbound' }
    ])
    renderAt('/favourites')
    await screen.findByText('Brixton')
    const order = screen.getAllByText(/^(Northern|Victoria)$/).map((e) => e.textContent)
    expect(order).toEqual(['Northern', 'Victoria']) // Northern is before Victoria on the home page
    expect(screen.getAllByRole('link', { name: "King's Cross St. Pancras" })).toHaveLength(2)
  })

  it('is what you get after starring a direction on the station page', async () => {
    const first = renderAt(`/station/${KX.url}`)
    fireEvent.click(await star('Northern, Northbound'))
    first.unmount()

    renderAt('/favourites')
    expect(await screen.findByRole('link', { name: "King's Cross St. Pancras" })).toBeTruthy()
    expect(await screen.findByText('Edgware via Bank')).toBeTruthy()
  })

  it('removes a favourite when its star is tapped', async () => {
    setFavourites([{ stationId: KX.id, lineId: 'northern', direction: 'Northbound' }])
    renderAt('/favourites')
    fireEvent.click(await star('Northern, Northbound'))
    await waitFor(() => expect(screen.getByText(/No favourites yet/)).toBeTruthy())
  })

  it('shows a favourite whose station is no longer in the data, and lets you remove it', () => {
    setFavourites([{ stationId: 'GONE', lineId: 'northern', direction: 'Northbound' }])
    renderAt('/favourites')
    expect(screen.getByText('Station no longer available')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: /station no longer available/ }))
    expect(screen.getByText(/No favourites yet/)).toBeTruthy()
  })

  it('says when a starred direction has no trains due', async () => {
    setFavourites([{ stationId: KX.id, lineId: 'northern', direction: 'Eastbound' }])
    renderAt('/favourites')
    expect(await screen.findByText('No trains due')).toBeTruthy()
  })
})
