const express = require('express')
const router = express.Router()
const { tflGet } = require('../../tfl')
const moment = require('moment')
const statistics = require('../../statistics/serverStatistics')
const { filterStationData } = require('../../lib/stationData')

//@router GET api/tube/stations
//@desc   profile route
//@access Public
router.get('/', async (req, res) => {
  let now = moment()
  statistics.logAppStationsRequest()

  // if timeStamp is set, calculate age.
  if (serverState.stationsTimeStamp) {
    //check stationsTimeStamp is from today
    const updatedToday = moment(now).isSame(
      serverState.stationsTimeStamp,
      'day'
    )

    // let ageInSeconds = Math.floor(now.diff(serverState.stationsTimeStamp)/1000)
    // If age is less than 30sec, send existing statuses to client (86400sec = 24hrs)
    if (updatedToday) {
      let currentStations = {
        stations: serverState.stations,
        lineStations: serverState.lineStations,
        stationsTimeStamp: serverState.stationsTimeStamp
      }
      return res.send(currentStations)
    }
  }

  // Line ids come from the latest statuses; before any statuses have been
  // fetched, fall back to the lines in the bundled data.
  const lineIds = serverState.statuses.length
    ? serverState.statuses.map((status) => status.id)
    : serverState.lineStations.map((line) => line.id)

  let lineStations = []
  let allStations = []
  let failedLines = []
  //Loop through all lines
  for (const lineId of lineIds) {
    let thisLineStations = []

    try {
      const stations = await tflGet(
        `/line/${encodeURIComponent(lineId)}/stoppoints?tflOperatedNationalRailStationsOnly=false`
      )

      statistics.logTflStationsRequest()

      stations.map((station) => {
        return thisLineStations.push(filterStationData(station, lineId))
      })

      // Filter out only stations not alreasy in allStations.
      let newStations = thisLineStations.filter(
        (newStation) =>
          !allStations.find((station) => newStation.id === station.id)
      )
      let unchangedStations = allStations.filter(
        (station) =>
          !thisLineStations.find((lineStation) => station.id === lineStation.id)
      )
      let updateStations = allStations.filter((station) =>
        thisLineStations.find((lineStation) => station.id === lineStation.id)
      )
      let updatedStations = updateStations.map((station) => {
        station.lines = [...new Set([...station.lines, lineId].sort())]
        return station
      })

      allStations = [...newStations, ...updatedStations, ...unchangedStations]
      lineStations = [
        ...lineStations,
        { id: lineId, stations: thisLineStations }
      ]
    } catch (error) {
      console.error(`GET stations, line ${lineId}:`, error.message)
      failedLines.push(lineId)
    }
  }

  // An incomplete result must not replace the stations already held
  if (failedLines.length) {
    return res.send({
      stations: serverState.stations,
      lineStations: serverState.lineStations,
      stationsTimeStamp: serverState.stationsTimeStamp
    })
  }

  now = moment().format()
  serverState.lineStations = lineStations
  serverState.stations = allStations
  serverState.stationsTimeStamp = now

  let payloadObject = {
    stations: serverState.stations,
    lineStations: serverState.lineStations,
    stationsTimeStamp: serverState.stationsTimeStamp
  }

  res.send(payloadObject)
})

module.exports = router
