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
  arrival('victoria', 'Northbound - Platform 3', 'Walthamstow Central', 5)
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

describe('the favourites page', () => {
  it('says how to add one when there are none', () => {
    renderAt('/favourites')
    expect(screen.getByText(/No favourites yet/)).toBeTruthy()
  })

  it("shows the station, the line and that direction's trains for a starred direction", async () => {
    setFavourites([{ stationId: KX.id, lineId: 'northern', direction: 'Northbound' }])
    renderAt('/favourites')

    expect(await screen.findByText("King's Cross St. Pancras")).toBeTruthy()
    expect(screen.getByText('Northern')).toBeTruthy()
    expect(await screen.findByText('Edgware via Bank')).toBeTruthy()
    expect(screen.getByText('High Barnet via Bank')).toBeTruthy()
    // only the starred direction: not Southbound, not the Victoria line
    expect(screen.queryByText('Morden via Bank')).toBeNull()
    expect(screen.queryByText('Brixton')).toBeNull()
  })

  it('keeps several starred directions under one station card', async () => {
    setFavourites([
      { stationId: KX.id, lineId: 'northern', direction: 'Northbound' },
      { stationId: KX.id, lineId: 'victoria', direction: 'Southbound' }
    ])
    renderAt('/favourites')
    await screen.findByText('Edgware via Bank')
    expect(screen.getAllByText("King's Cross St. Pancras")).toHaveLength(1)
    expect(await screen.findByText('Brixton')).toBeTruthy()
    expect(screen.getByText('Victoria')).toBeTruthy()
  })

  it('is what you get after starring a direction on the station page', async () => {
    const first = renderAt(`/station/${KX.url}`)
    fireEvent.click(await star('Northern, Northbound'))
    first.unmount()

    renderAt('/favourites')
    expect(await screen.findByText("King's Cross St. Pancras")).toBeTruthy()
    expect(await screen.findByText('Edgware via Bank')).toBeTruthy()
  })

  it('removes a favourite when its star is tapped', async () => {
    setFavourites([{ stationId: KX.id, lineId: 'northern', direction: 'Northbound' }])
    renderAt('/favourites')
    fireEvent.click(await star('Northern, Northbound'))
    await waitFor(() => expect(screen.getByText(/No favourites yet/)).toBeTruthy())
  })

  it('offers to remove a favourite whose station is no longer in the data', () => {
    setFavourites([{ stationId: 'GONE', lineId: 'northern', direction: 'Northbound' }])
    renderAt('/favourites')
    fireEvent.click(screen.getByRole('button', { name: /Remove from favourites/ }))
    expect(screen.getByText(/No favourites yet/)).toBeTruthy()
  })

  it('says when a starred direction has no trains due', async () => {
    setFavourites([{ stationId: KX.id, lineId: 'northern', direction: 'Eastbound' }])
    renderAt('/favourites')
    expect(await screen.findByText('No trains due')).toBeTruthy()
  })
})
