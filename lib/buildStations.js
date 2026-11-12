const { tflGet } = require('../tfl')
const statistics = require('../statistics/serverStatistics')
const { filterStationData } = require('./stationData')
const { mergeStations } = require('./mergedStations')

// Asks TfL for the stops on each line and builds the station list:
//   stations:     one record per station, with the lines that serve it
//   lineStations: for each line, the ids of its stations
//   failedLines:  lines TfL could not be asked about (the result is then incomplete)
async function buildStations(lineIds) {
  const byId = new Map()
  const lineStations = []
  const failedLines = []

  for (const lineId of lineIds) {
    try {
      const stops = await tflGet(
        `/line/${encodeURIComponent(lineId)}/stoppoints?tflOperatedNationalRailStationsOnly=false`
      )
      statistics.logTflStationsRequest()

      const lineStops = stops.map((stop) => filterStationData(stop, lineId))
      for (const station of lineStops) {
        const existing = byId.get(station.id)
        if (existing) existing.lines = [...new Set([...existing.lines, lineId])].sort()
        else byId.set(station.id, station)
      }
      lineStations.push({ id: lineId, stations: lineStops.map(({ id }) => ({ id })) })
    } catch (error) {
      console.error(`GET stations, line ${lineId}:`, error.message)
      failedLines.push(lineId)
    }
  }

  const stations = [...byId.values()].sort((a, b) => a.name.localeCompare(b.name))
  return { ...mergeStations(stations, lineStations), failedLines }
}

module.exports = { buildStations }
