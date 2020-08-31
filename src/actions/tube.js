import axios from 'axios';
import { kebabCase, trimStationName } from '../Helpers';
import store from '../store';


// export const sortStations = () => async dispatch => {
//   const state = store.getState()
//   let currentStations = state.tube.stations
//   console.log('Sorting Stations:', currentStations.length)
//   let payload = [...new Set([...currentStations])]
//   console.log('Sorted Stations:', payload)

//   dispatch({
//     type: 'SORT_STATIONS',
//     payload: payload
//   })

// }

export const getStations = (lineId) => async dispatch => {
  console.log('--------------------------')
  const state = store.getState()
  let currentStations = state.tube.stations

  // console.log('Current stations: ',currentStations.length)
  // listArrayNames(currentStations)
  // console.log(currentStations)
  // console.log('Getting stations for:', lineId,'line.')
  const apiString = `app_id=${process.env.REACT_APP_TFL_API_ID}&app_key=${process.env.REACT_APP_TFL_APP_KEY}`
  let lineStations = []
  // let t0 = performance.now()

  
  

  try {
    let response = await axios.get(`https://api.tfl.gov.uk/Line/${lineId}/StopPoints?tflOperatedNationalRailStationsOnly=false&${apiString}`, {
      headers : {Accept: 'application/json'}
    })


    console.log('Got',lineId,'line Stations:', response.data.length)
    // console.log('************',response.data)
    let stations = response.data
    stations.map(station => 
      lineStations.push({
        key: station.id,
        id: station.id,
        url: kebabCase(trimStationName(station.commonName)),
        name: trimStationName(station.commonName),
        lines: [lineId]
      })
    )

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


/// filters etc


  //   case 'GET_LINESTATIONS':
  //     {//Find index of entry to update (entry.id === payload.id)
  //     // const idMatch = (element) => element.id === payload.id;
  //     // let indexToUpdate = state.statuses.findIndex(idMatch)
  //     // console.log('Index to update:',indexToUpdate)

  //     // // let newEntry = (state.statuses[indexToUpdate].stations = [...payload.stations])
      
  //     // let entryToUpdate = state.statuses.filter(function (line) { return line.id === payload.id })[0]
  //     // // console.log('entryToUPdate',entryToUpdate)
  //     // entryToUpdate.stations = payload.stations
  //     // console.log('entryToUPdate',entryToUpdate)

  //     // let newArray = [...state.statuses.filter(function (line) { return line.id !== payload.id }),
  //     // entryToUpdate]

  //     return {
  //       ...state,
  //       lineStations: [...state.lineStations, payload],
  //       // index: state.statuses.findIndex(state.statuses.filter(function (line) { return line.id === payload.id })),
  //       // Filters out existing match to payload.id
  //       // stations: [...state.stations.filter(line => line.id !== payload.id), payload],
  //       loading: false
  //     // var results = state.statuses.filter(function (line) { return line.id === payload.id });
  //   }
  // }





