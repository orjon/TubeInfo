import axios from 'axios'

// --------------------------------------------------------------
export const getStations = () => async (dispatch) => {
  try {
    // Get statuses from server
    let response = await axios.get(`/api/stations`, {
      headers: { Accept: 'application/json' }
    })

    let payloadObject = {
      stations: response.data.stations,
      lineStations: response.data.lineStations,
      stationsTimeStamp: response.data.stationsTimeStamp
    }

    dispatch({
      type: 'GET_STATIONS',
      payload: payloadObject
    })
  } catch (error) {
    console.log('GET_STATIONS error:', error)
    dispatch({
      type: 'STATUS_ERROR',
      payload: error
    })
  }
}

// --------------------------------------------------------------
export const getStationArrivals = (stationId) => async (dispatch) => {
  try {
    //Get arrivals at station from server
    let response = await axios.get(`/api/arrivals/${stationId}`, {
      headers: { Accept: 'application/json' }
    })

    dispatch({
      type: 'GET_STATIONARRIVALS',
      payload: response.data
    })
  } catch (error) {
    console.log('GET_STATIONARRIVALS error:', error)
    dispatch({
      type: 'STATUS_ERROR',
      payload: error
    })
  }
}

// --------------------------------------------------------------
export const getStatuses = () => async (dispatch) => {
  try {
    // Get statuses from server
    let response = await axios.get(`/api/statuses`, {
      headers: { Accept: 'application/json' }
    })

    let payloadObject = {
      statuses: response.data.statuses,
      statusestimeStamp: response.data.statusesTimeStamp
    }

    dispatch({
      type: 'GET_STATUSES',
      payload: payloadObject
    })
  } catch (error) {
    dispatch({
      type: 'STATUS_ERROR',
      payload: error
    })
  }
}

// --------------------------------------------------------------
export const setStatusesExpired = () => (dispatch) => {
  dispatch({
    type: 'SET_STATUSESEXPIRED'
  })
}
