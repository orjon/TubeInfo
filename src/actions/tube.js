import axios from 'axios';
import { kebabCase, trimStationName } from '../Helpers';

// export const getAllStations = (lineStatuses) => async dispatch => {
//   console.log('Getting stations for all lines')
//   const apiString = `app_id=${process.env.REACT_APP_TFL_API_ID}&app_key=${process.env.REACT_APP_TFL_APP_KEY}`
//   let lineStations = []
//   let t0 = performance.now()

//   for (let i=0; i< lineStatuses.length; i++ ) {
//     let lineId = lineStatuses[i].id
//     console.log('Get line:', lineId)
//     getStations(lineId)
//   }
  
// }

export const getStations = (lineId) => async dispatch => {
  console.log('Getting stations for:', lineId,'line.')
  const apiString = `app_id=${process.env.REACT_APP_TFL_API_ID}&app_key=${process.env.REACT_APP_TFL_APP_KEY}`
  let lineStations = []
  let t0 = performance.now()
  try {
    let response = await axios.get(`https://api.tfl.gov.uk/Line/${lineId}/StopPoints?tflOperatedNationalRailStationsOnly=false&${apiString}`, {
      headers : {Accept: 'application/json'}
    })
    console.log(lineId,'line Stations:', response.data.length)
    // console.log('************',response.data)
    let counter = 0
    response.data.map(station => {
      // console.log(counter, station.commonName)
      counter++
      lineStations.push({
        key: station.id,
        id: station.id,
        url: kebabCase(trimStationName(station.commonName)),
        name: trimStationName(station.commonName),
      })
    })

    //Add array of each connecting line

    let payloadObject = { id: lineId, stations: lineStations}

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

// export const getStations = (lineId) => async dispatch => {
//   console.log('Getting stations...', lineId)
//   const apiString = `app_id=${process.env.REACT_APP_TFL_API_ID}&app_key=${process.env.REACT_APP_TFL_APP_KEY}`
//   let lineStations = []
//   let t0 = performance.now()
//   try {
//     let response = await axios.get(`https://api.tfl.gov.uk/Line/${lineId}/StopPoints?tflOperatedNationalRailStationsOnly=false&${apiString}`, {
//       headers : {Accept: 'application/json'}
//     })
//     console.log(lineId,'line Stations:', response.data.length)
//     // console.log(response.data)
//     let counter = 0
//     response.data.map(station => {
//       // console.log(counter, station.commonName)
//       counter++

//       let validFacilities = []
//       let rejectedValues = ['no', '0']
//       let renamedFacilityKeys = ['TaxiRankOutsideStation']
//       let validContacts = []

//       let contact = [
//         {key: 'Address', value: undefined},
//         {key: 'PhoneNo', value: undefined}
//       ]

//       contact.forEach(property => {
//         let propertyObject = station.additionalProperties.find(x => x.key === property.key)
//         if (propertyObject){
//           if (!rejectedValues.includes(propertyObject.value)){
//             property.value = propertyObject.value
//             validContacts.push(property)
//             return
//           }
//         } 
//       });

//       let facility = [
//         {key: 'Ticket Halls', value: undefined},
//         {key: 'Toilets', value: undefined},
//         {key: 'Lifts', value: undefined},
//         {key: 'Escalators', value: undefined},
//         {key: 'WiFi', value: undefined},
//         {key: 'Help Points', value: undefined},
//         {key: 'Payphones', value: undefined},
//         {key: 'Boarding Ramp', value: undefined},
//         {key: 'Cash Machines', value: undefined},
//         {key: 'Euro Cash Machines', value: undefined},
//         {key: 'Waiting Room', value: undefined},
//         // {key: 'Gates', value: undefined},
//         {key: 'TaxiRankOutsideStation', value: undefined},
//         {key: 'Car park', value: undefined},
//         {key: 'Left Luggage', value: undefined},
//         {key: 'Photo Booths', value: undefined},
//         {key: 'Amazon Lockers', value: undefined},
//         {key: 'ASDA Click and Collect', value: undefined},
//       ]

//       facility.forEach(facility => {
//         let facilityObject = station.additionalProperties.find(x => x.key === facility.key)
//         if (facilityObject && renamedFacilityKeys.includes(facility.key)) {
//           facility.key = 'Taxi Rank'
//         }
//         if (facilityObject && !rejectedValues.includes(facilityObject.value)){
//           facility.value = facilityObject.value
//           validFacilities.push(facility)
//           return
//         } 
//       });

//       // console.log('Facilities: ', validFacilities)

//       lineStations.push({
//         key: station.id,
//         id: station.id,
//         url: kebabCase(trimStationName(station.commonName)),
//         name: trimStationName(station.commonName),
//         lat: station.lat,
//         lng: station.lon,
//         contact: [...validContacts],
//         facilities: validFacilities
//       })
//     })

//     let payloadObject = { id: lineId, stations: lineStations}

//     dispatch({
//       type: 'GET_LINESTATIONS',
//       payload: payloadObject
//     })

//   } catch (error) {
//     console.log('GET_LINESTATIONS error:', error)
//     dispatch({
//       type: 'STATUS_ERROR',
//       payload: error
//       // payload: { 
//       //   msg: error.response.statusText,
//       //   status: error.response.status
//       // }
//     })
//   }

// }



export const getStatuses = () => async dispatch => {
  console.log('Getting statuses...')
  let t0 = performance.now()
  let lines = []
  const apiString = `app_id=${process.env.REACT_APP_TFL_API_ID}&app_key=${process.env.REACT_APP_TFL_APP_KEY}`
  try {
    let response = await axios.get(`https://api.tfl.gov.uk/line/mode/tube/status?${apiString}`, {
      headers : {Accept: 'application/json'}
    })
    // let response = await axios.get(`http://slowwly.robertomurray.co.uk/delay/1000/url/https://api.tfl.gov.uk/line/mode/tube/status?${apiString}`, {
    //   headers : {Accept: 'application/json'}
    // })
    
    let lineStatuses = response.data
    lineStatuses.map(line => 
      lines.push({
        key: line.id,
        id: line.id,
        name: line.name,
        status: line.lineStatuses[0].statusSeverityDescription,
        reason: line.lineStatuses[0].reason
      })
    )
    console.log('Got statuses:')
    console.log(lineStatuses)
    let tStatuses = performance.now()
    console.log('took ' + ((tStatuses - t0)/1000).toFixed(3) + 's')

    dispatch({
      type: 'GET_STATUSES',
      payload: lines,
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





