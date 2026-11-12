// Rebuilds data/stations.json and data/lineStations.json from the live TfL API,
// using the same code the server uses. Run it when the network changes or after
// adding a line to lib/lines.js:   pnpm refresh-data
// These files are the starting data for the client and the server; the server
// refreshes them from TfL about once a day while it runs.
const fs = require('node:fs')
const path = require('node:path')
require('../config')
const { buildStations } = require('../lib/buildStations')
const { LINE_IDS } = require('../lib/lines')

async function main() {
  const { stations, lineStations, failedLines } = await buildStations(LINE_IDS)
  if (failedLines.length) {
    console.error('Not written: TfL failed for', failedLines.join(', '))
    process.exit(1)
  }
  const dir = path.join(__dirname, '..', 'data')
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'stations.json'), JSON.stringify(stations, null, 2) + '\n')
  fs.writeFileSync(path.join(dir, 'lineStations.json'), JSON.stringify(lineStations, null, 2) + '\n')
  console.log(`Wrote ${stations.length} stations on ${lineStations.length} lines to data/`)
}

main()
