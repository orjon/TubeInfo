require('dotenv').config()
const express = require('express')
const initialStations = require('./data/stations.json')
const initialLineStations = require('./data/lineStations.json')
const moment = require('moment')
const path = require('path')

const routeTubeStatuses = require('./routes/api/statuses')
const routeTubeStations = require('./routes/api/stations')
const routeTubeArrivals = require('./routes/api/arrivals')

const app = express()

// Everything lives under one base path, e.g. orjon.com/setoff
const BASE_PATH = (process.env.BASE_PATH || '/setoff').replace(/\/$/, '')
const CLIENT_DIR = process.env.CLIENT_DIR || path.join(__dirname, 'client', 'dist')

// Server-wide counters and cached data. Tests call resetState() between runs.
function resetState() {
  global.stats = {
    serverStart: moment().format(),
    appRequests: 0,
    appStationsRequests: 0,
    appStatusesRequests: 0,
    appArrivalsRequests: 0,
    tflRequests: 0,
    tflStationsRequests: 0,
    tflStatusesRequests: 0,
    tflArrivalsRequests: 0
  }

  global.serverState = {
    statuses: [],
    statusesTimeStamp: undefined,
    stations: structuredClone(initialStations),
    lineStations: structuredClone(initialLineStations),
    arrivals: {}, // by station id: { arrivals, arrivalsTimeStamp }
    stationsTimeStamp: undefined
  }
}
resetState()

// health check, for monitoring and deploys. It lives under /api because nginx only
// forwards /setoff/api/ to this server; every other /setoff/ path is the web page.
app.get(`${BASE_PATH}/api/healthz`, (req, res) => {
  res.json({ ok: true, uptimeSeconds: Math.round(process.uptime()) })
})

//define routes
app.use(`${BASE_PATH}/api/statuses`, routeTubeStatuses)
app.use(`${BASE_PATH}/api/stations`, routeTubeStations)
app.use(`${BASE_PATH}/api/arrivals`, routeTubeArrivals)

// Unknown API paths are errors, not the web page
app.use(`${BASE_PATH}/api`, (req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.use(BASE_PATH, express.static(CLIENT_DIR))

// Any other address is the web app's one page, but a missing file is a real 404.
// A file name ends in a dot and a short extension (/setoff/old.js). A station URL can
// contain a dot too (/setoff/station/kings-cross-st.-pancras) and must still get the page.
const looksLikeAFile = /\.[a-z0-9]{1,5}$/i
app.get(`${BASE_PATH}/*`, (req, res) => {
  if (looksLikeAFile.test(req.path)) return res.status(404).send('Not found')
  res.sendFile(path.join(CLIENT_DIR, 'index.html'))
})

module.exports = { app, resetState, BASE_PATH }
