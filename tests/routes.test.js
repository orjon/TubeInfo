import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { createRequire } from 'node:module'
import request from 'supertest'
import { stubTfl } from './helpers/tflStub'
import statusesFixture from './fixtures/statuses.json'
import stoppointsFixture from './fixtures/stoppoints-victoria.json'
import arrivalsFixture from './fixtures/arrivals-waterloo.json'
import elizabethFixture from './fixtures/arrivals-elizabeth-paddington.json'

// Must be set before the server loads its config
vi.hoisted(() => {
  process.env.TFL_APP_KEY = 'SECRET-KEY-VALUE'
})

const require = createRequire(import.meta.url)
const { app, resetState } = require('../app')

const WATERLOO = '940GZZLUWLO' // a real station id in the bundled data
const STATUSES = '/line/mode/tube,elizabeth-line/status'
const ARRIVALS = `/stoppoint/${WATERLOO}/arrivals`
const STOPPOINTS = '/^\\/line\\/.+\\/stoppoints/'

beforeEach(() => {
  resetState()
  vi.spyOn(console, 'log').mockImplementation(() => {}) // the server logs every request
  vi.spyOn(console, 'error').mockImplementation(() => {})
})
afterEach(() => {
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

describe('health and unknown addresses', () => {
  it('answers the health check', async () => {
    const res = await request(app).get('/setoff/api/healthz')
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
  })

  it('gives a JSON 404 for an unknown API path', async () => {
    const res = await request(app).get('/setoff/api/nope')
    expect(res.status).toBe(404)
    expect(res.body.error).toBeDefined()
  })

  it('gives a 404, not the web page, for a missing file', async () => {
    const res = await request(app).get('/setoff/old-bundle.js')
    expect(res.status).toBe(404)
  })
})

describe('GET /api/statuses', () => {
  it('returns each line with its status', async () => {
    stubTfl({ [STATUSES]: statusesFixture })
    const res = await request(app).get('/setoff/api/statuses')
    expect(res.status).toBe(200)
    expect(res.body.statuses.map((s) => s.id).sort()).toEqual(['bakerloo', 'central', 'elizabeth', 'victoria'])
    expect(res.body.statuses.find((s) => s.id === 'bakerloo')).toMatchObject({ name: 'Bakerloo', status: expect.any(String) })
    expect(res.body.statusesTimeStamp).toBeDefined()
  })

  it('shows the Elizabeth line as "Elizabeth", like the Tube lines, not TfL\'s "Elizabeth line"', async () => {
    stubTfl({ [STATUSES]: statusesFixture })
    const res = await request(app).get('/setoff/api/statuses')
    expect(res.body.statuses.find((s) => s.id === 'elizabeth').name).toBe('Elizabeth')
    expect(res.body.statuses.find((s) => s.id === 'victoria').name).toBe('Victoria')
  })

  it('removes the "LINE NAME:" prefix from a disruption reason', async () => {
    stubTfl({ [STATUSES]: statusesFixture })
    const res = await request(app).get('/setoff/api/statuses')
    const central = res.body.statuses.find((s) => s.id === 'central')
    expect(central.status).toBe('Minor Delays')
    expect(central.reason).toBe(
      'Minor delays due to train cancellations. GOOD SERVICE on the rest of the line.'
    )
  })

  it('asks TfL only once for requests within 30 seconds', async () => {
    const { calls } = stubTfl({ [STATUSES]: statusesFixture })
    await request(app).get('/setoff/api/statuses')
    await request(app).get('/setoff/api/statuses')
    expect(calls).toHaveLength(1)
  })

  it('sends the key in a header and never in the URL', async () => {
    const { calls } = stubTfl({ [STATUSES]: statusesFixture })
    await request(app).get('/setoff/api/statuses')
    expect(calls[0]).not.toMatch(/app_key|app_id/)
    expect(fetch.mock.calls[0][1].headers.app_key).toBe('SECRET-KEY-VALUE')
  })

  it('answers 502 straight away when TfL fails and there is nothing saved', async () => {
    stubTfl({}) // every call 404s
    const res = await request(app).get('/setoff/api/statuses')
    expect(res.status).toBe(502)
    expect(res.body.error).toBeDefined()
  })

  it('serves the last good statuses when TfL fails later', async () => {
    stubTfl({ [STATUSES]: statusesFixture })
    const first = await request(app).get('/setoff/api/statuses')

    global.serverState.statusesTimeStamp = '2000-01-01T00:00:00Z' // make the cache stale
    stubTfl({}) // TfL is now down
    const second = await request(app).get('/setoff/api/statuses')

    expect(second.status).toBe(200)
    expect(second.body.statuses).toEqual(first.body.statuses)
  })

  it('does not put the key in the log when TfL fails', async () => {
    stubTfl({})
    await request(app).get('/setoff/api/statuses')
    expect(console.error).toHaveBeenCalled() // the failure was logged...
    expect(JSON.stringify(console.error.mock.calls)).not.toContain('SECRET-KEY-VALUE') // ...without the key
  })
})

describe('GET /api/arrivals/:stationId', () => {
  it('returns 404 for an unknown station', async () => {
    const { calls } = stubTfl({})
    const res = await request(app).get('/setoff/api/arrivals/not-a-station')
    expect(res.status).toBe(404)
    expect(calls).toHaveLength(0) // and does not bother TfL
  })

  it('returns parsed arrivals, soonest first', async () => {
    stubTfl({ [ARRIVALS]: arrivalsFixture })
    const res = await request(app).get(`/setoff/api/arrivals/${WATERLOO}`)
    expect(res.status).toBe(200)
    expect(res.body.stationId).toBe(WATERLOO)
    const times = res.body.arrivals.map((a) => new Date(a.expected).getTime())
    expect(times).toEqual([...times].sort((a, b) => a - b))
    expect(res.body.arrivals[0]).toMatchObject({ direction: expect.any(String), platform: expect.any(String) })
  })

  it('answers 502 when TfL fails', async () => {
    stubTfl({})
    const res = await request(app).get(`/setoff/api/arrivals/${WATERLOO}`)
    expect(res.status).toBe(502)
  })

  it('asks TfL once for requests within 30 seconds', async () => {
    const { calls } = stubTfl({ [ARRIVALS]: arrivalsFixture })
    await request(app).get(`/setoff/api/arrivals/${WATERLOO}`)
    await request(app).get(`/setoff/api/arrivals/${WATERLOO}`)
    expect(calls).toHaveLength(1)
  })

  it('asks TfL about every stop of a merged station and combines the answers', async () => {
    const PADDINGTON = '940GZZLUPAC' // merged with PAH and the two Elizabeth line stops
    const stop = (id) => `/stoppoint/${id}/arrivals`
    const { calls } = stubTfl({
      [stop('940GZZLUPAC')]: [{ ...arrivalsFixture[0], lineId: 'bakerloo', platformName: 'Southbound - Platform 4', expectedArrival: '2026-01-01T10:05:00Z' }],
      [stop('940GZZLUPAH')]: [{ ...arrivalsFixture[0], lineId: 'circle', platformName: 'Eastbound - Platform 15', expectedArrival: '2026-01-01T10:03:00Z' }],
      [stop('910GPADTLL')]: [{ ...elizabethFixture[0], expectedArrival: '2026-01-01T10:01:00Z' }],
      [stop('910GPADTON')]: []
    })
    const res = await request(app).get(`/setoff/api/arrivals/${PADDINGTON}`)
    expect(res.status).toBe(200)
    expect(calls.sort()).toEqual(['940GZZLUPAC', '940GZZLUPAH', '910GPADTLL', '910GPADTON'].map(stop).sort())
    expect(res.body.arrivals.map((a) => a.lineId)).toEqual(['elizabeth', 'circle', 'bakerloo']) // soonest first
  })

  it('answers 502 if either stop of a merged station fails', async () => {
    stubTfl({ ['/stoppoint/940GZZLUPAC/arrivals']: arrivalsFixture }) // the other stop 404s
    const res = await request(app).get('/setoff/api/arrivals/940GZZLUPAC')
    expect(res.status).toBe(502)
  })

  it('does not add arrivals to the station list', async () => {
    stubTfl({ [ARRIVALS]: arrivalsFixture })
    await request(app).get(`/setoff/api/arrivals/${WATERLOO}`)
    expect(global.serverState.arrivals[WATERLOO].arrivals.length).toBeGreaterThan(0) // cached separately...
    expect(global.serverState.stations.find((s) => s.id === WATERLOO)).not.toHaveProperty('arrivals') // ...not on the station
  })
})

describe('GET /api/stations', () => {
  it('works on a fresh server before any statuses have been fetched', async () => {
    stubTfl({ [STOPPOINTS]: stoppointsFixture })
    const res = await request(app).get('/setoff/api/stations')
    expect(res.status).toBe(200)
    expect(res.body.lineStations.length).toBeGreaterThan(0)
    expect(res.body.stations.length).toBeGreaterThan(0)
  })

  it('lists the stations of each line by id only', async () => {
    stubTfl({ [STOPPOINTS]: stoppointsFixture })
    const res = await request(app).get('/setoff/api/stations')
    for (const line of res.body.lineStations) {
      for (const stop of line.stations) expect(Object.keys(stop)).toEqual(['id'])
    }
  })

  it('merges a station served by several lines into one record', async () => {
    stubTfl({ [STOPPOINTS]: stoppointsFixture })
    const res = await request(app).get('/setoff/api/stations')
    const kings = res.body.stations.filter((s) => s.id === stoppointsFixture[1].id)
    expect(kings).toHaveLength(1)
    expect(kings[0].lines.length).toBeGreaterThan(1)
  })

  it('keeps the stations it already has if any line fails', async () => {
    const before = structuredClone(global.serverState.stations)
    // every line answers except central, which TfL fails on
    vi.stubGlobal('fetch', vi.fn(async (url) =>
      String(url).includes('/line/central/')
        ? new Response('{}', { status: 500 })
        : new Response(JSON.stringify(stoppointsFixture), { status: 200 })
    ))
    const res = await request(app).get('/setoff/api/stations')
    expect(res.status).toBe(200)
    expect(res.body.stations).toEqual(before)
    expect(global.serverState.stationsTimeStamp).toBeUndefined()
  })
})
