import axios from 'axios';
import { kebabCase, trimStationName } from '../Helpers';
import store from '../store';


const apiString = `app_id=${process.env.REACT_APP_TFL_API_ID}&app_key=${process.env.REACT_APP_TFL_APP_KEY}`
const moment = require('moment');
  

export const getLineStations = (lineId) => async dispatch => {
  console.log('Action: getLineStations')
  const state = store.getState()
  let currentStations = state.tube.stations

  // console.log('Current stations: ',currentStations.length)
  // listArrayNames(currentStations)
  // console.log(currentStations)
  // console.log('Getting stations for:', lineId,'line.')
  let lineStations = []
  // let t0 = performance.now()

  try {
    let response = await axios.get(`https://api.tfl.gov.uk/line/${lineId}/stoppoints?tflOperatedNationalRailStationsOnly=false&${apiString}`, {
      headers : {Accept: 'application/json'}
    })

    // console.log('Got',lineId,'line Stations:', response.data.length)
    // console.log('************',response.data)
    let stations = response.data
    stations.map(station => {
      let validFacilities = []
      let rejectedValues = ['no', '0']
      let renamedFacilityKeys = ['TaxiRankOutsideStation']
      let validContacts = []
      let facility = [
        {key: 'Ticket Halls', value: undefined},
        {key: 'Toilets', value: undefined},
        {key: 'Lifts', value: undefined},
        {key: 'Escalators', value: undefined},
        {key: 'WiFi', value: undefined},
        {key: 'Help Points', value: undefined},
        {key: 'Payphones', value: undefined},
        {key: 'Boarding Ramp', value: undefined},
        {key: 'Cash Machines', value: undefined},
        {key: 'Euro Cash Machines', value: undefined},
        {key: 'Waiting Room', value: undefined},
        // {key: 'Gates', value: undefined},
        {key: 'TaxiRankOutsideStation', value: undefined},
        {key: 'Car park', value: undefined},
        {key: 'Left Luggage', value: undefined},
        {key: 'Photo Booths', value: undefined},
        {key: 'Amazon Lockers', value: undefined},
        {key: 'ASDA Click and Collect', value: undefined},
      ]
      let contact = [
        {key: 'Address', value: undefined},
        {key: 'PhoneNo', value: undefined}
      ]

      contact.forEach(property => {
        let propertyObject = station.additionalProperties.find(x => x.key === property.key)
        if (propertyObject){
          if (!rejectedValues.includes(propertyObject.value)){
            property.value = propertyObject.value
            validContacts.push(property)
            return
          }
        } 
      });

      facility.forEach(facility => {
        let facilityObject = station.additionalProperties.find(x => x.key === facility.key)
        if (facilityObject && renamedFacilityKeys.includes(facility.key)) {
          facility.key = 'Taxi Rank'
        }
        if (facilityObject && !rejectedValues.includes(facilityObject.value)){
          facility.value = facilityObject.value
          validFacilities.push(facility)
          return
        } 
      });

      return lineStations.push({
        key: station.id,
        id: station.id,
        url: kebabCase(trimStationName(station.commonName)),
        name: trimStationName(station.commonName),
        lines: [lineId],
        lat: station.lat,
        lng: station.lon,
        contact: [...validContacts],
        facilities: validFacilities
      })
    })

    let newStations = lineStations.filter(newStation => !currentStations.find( currentStation => newStation.id === currentStation.id))
    let unchangedStations = currentStations.filter(currentStation => !lineStations.find( lineStation => currentStation.id === lineStation.id))
    let updateStations = currentStations.filter(currentStation => lineStations.find( lineStation => currentStation.id === lineStation.id))
    let updatedStations = updateStations.map(station => {
      station.lines = [...new Set([...station.lines, lineId].sort())]
      return station
    })

    // console.log(lineStations)
    // listArrayNames(lineStations)
    // compare arrays and find new unique values to add. 
    // console.log('New Stations:', newStations.length)
    // listArrayNames(newStations)
    // console.log('Unchanged Stations:', unchangedStations.length)
    // listArrayNames(unchangedStations)
    // console.log('Update Stations:', updateStations.length)
    // listArrayNames(updateStations)
    // console.log(updateStations)
    // console.log(updatedStations)

    // let tStations = performance.now()
    // console.log('took ' + ((tStations - t0)/1000).toFixed(3) + 's')

    let payloadObject = {lineStations: { id: lineId, stations: lineStations}, stations: [...newStations, ...updatedStations, ...unchangedStations] }

    dispatch({
      type: 'GET_LINESTATIONS',
      payload: payloadObject
    })

  } catch (error) {
    console.log('GET_LINESTATIONS error:', error)
    dispatch({
      type: 'STATUS_ERROR',
      payload: error
      // payload: { 
      //   msg: error.response.statusText,
      //   status: error.response.status
      // }
    })
  }

}

export const getStationArrivals = (station) => async dispatch => {
  console.log('Action: getStationArrivials')
  let stationId = station.id
  let arrivals = []

  try {
    let response = await axios.get(`https://api.tfl.gov.uk/StopPoint/${stationId}/Arrivals?${apiString}`, {
      headers : {Accept: 'application/json'}
    })
    response.data.map(arrival => 
      arrivals.push({
        lineName: arrival.lineName,
        lineId: arrival.lineId,
        platform: arrival.platformName,
        desintation: arrival.destination,
        towards: arrival.towards,
        expected: arrival.expectedArrival
      })
    )

    let payload = arrivals
    console.log('Payload:',payload)

    dispatch({
      type: 'GET_STATIONARRIVALS',
      payload: payload
    })
    
  } catch (error) {
    console.log('GET_STATIONARRIVALS error:', error)
    dispatch({
      type: 'STATUS_ERROR',
      payload: error
      // payload: { 
      //   msg: error.response.statusText,
      //   status: error.response.status
      // }
    })
  }


}




export const getStatuses = () => async dispatch => {
  console.log('Action: getStatuses')
  // let t0 = performance.now()
  let lines = []
  const apiString = `app_id=${process.env.REACT_APP_TFL_API_ID}&app_key=${process.env.REACT_APP_TFL_APP_KEY}`
  try {
    // let response = await axios.get(`https://api.tfl.gov.uk/line/mode/tube/status?${apiString}`, {
    //   headers : {Accept: 'application/json'}
    // })

    // Delayed response
    let response = await axios.get(`http://slowwly.robertomurray.co.uk/delay/2000/url/https://api.tfl.gov.uk/line/mode/tube/status?${apiString}`, {
      headers : {Accept: 'application/json'}
    })

    
    let lineStatuses = response.data
    lineStatuses.map(line => 
      lines.push({
        key: line.id,
        id: line.id,
        name: line.name,
        status: line.lineStatuses[0].statusSeverityDescription,
        reason: line.lineStatuses[0].reason,
        timeStamp: moment().format(),
      })
    )

    // console.log('Got statuses:')
    // console.log(lineStatuses)
    // let tStatuses = performance.now()
    // console.log('took ' + ((tStatuses - t0)/1000).toFixed(3) + 's')

    let timeStamp = moment().format()
  
    dispatch({
      type: 'GET_STATUSES',
      payload: [lines, timeStamp]
    })

  } catch (error) {
    dispatch({
      type: 'STATUS_ERROR',
      payload: error
      // payload: { 
      //   msg: error.response.statusText,
      //   status: error.response.status
      // }
    })
  }

}

export const setStatusAge = () => async dispatch => {
  console.log('Action: setStatusAge')
  let now = moment()
  const state = store.getState()
  let statusesTimeStamp = state.tube.statusesTimeStamp

  //calculate age of last status update
  let ageInSeconds = Math.floor(now.diff(statusesTimeStamp)/1000)
  // console.log('Age: '+ageInSeconds)

  dispatch({
    type: 'SET_STATUSAGE',
    payload: ageInSeconds
  })

}



