import axios from 'axios';
import moment from 'moment';

// --------------------------------------------------------------
export const getStations = (calledFrom) => async (dispatch) => {
  console.log(calledFrom + ' -> getStations from server');
  // let t0 = performance.now()

  try {
    // Get statuses from server
    let response = await axios.get(`/tubeapi/stations`, {
      headers: { Accept: 'application/json' },
    });

    // let tStatuses = performance.now()
    // console.log('getStations took ' + ((tStatuses - t0)/1000).toFixed(3) + 's')

    console.log(
      moment(response.data.statusesTimeStamp).format('HH:mm:ss'),
      'GOT stations'
    );

    let payloadObject = {
      stations: response.data.stations,
      lineStations: response.data.lineStations,
      stationsTimeStamp: response.data.stationsTimeStamp,
    };

    dispatch({
      type: 'GET_STATIONS',
      payload: payloadObject,
    });
  } catch (error) {
    console.log('GET_STATIONS error:', error);
    dispatch({
      type: 'STATUS_ERROR',
      payload: error,
    });
  }
};

// --------------------------------------------------------------
export const getStationArrivals = ({ calledFrom, stationId }) => async (
  dispatch
) => {
  console.log(calledFrom + ' -> getStationArrivals', stationId);

  try {
    //Get arrivals at station from server
    let response = await axios.get(`/tubeapi/arrivals/${stationId}`, {
      headers: { Accept: 'application/json' },
    });
    console.log(
      moment(response.data.arrivalsTimeStamp).format('HH:mm:ss'),
      'GOT stationArrivals'
    );

    dispatch({
      type: 'GET_STATIONARRIVALS',
      payload: response.data,
    });
  } catch (error) {
    console.log('GET_STATIONARRIVALS error:', error);
    dispatch({
      type: 'STATUS_ERROR',
      payload: error,
    });
  }
};

// --------------------------------------------------------------
export const getStatuses = (calledFrom) => async (dispatch) => {
  console.log(calledFrom + ' -> getStatuses from server');
  // let t0 = performance.now()

  try {
    // Get statuses from server
    let response = await axios.get(`/tubeapi/statuses`, {
      headers: { Accept: 'application/json' },
    });

    // let tStatuses = performance.now()
    // console.log('getStatuses took ' + ((tStatuses - t0)/1000).toFixed(3) + 's')
    console.log(
      moment(response.data.statusesTimeStamp).format('HH:mm:ss'),
      'GOT statuses'
    );

    let payloadObject = {
      statuses: response.data.statuses,
      statusestimeStamp: response.data.statusesTimeStamp,
    };

    dispatch({
      type: 'GET_STATUSES',
      payload: payloadObject,
    });
  } catch (error) {
    dispatch({
      type: 'STATUS_ERROR',
      payload: error,
    });
  }
};

// --------------------------------------------------------------
export const setStatusesExpired = (calledFrom) => (dispatch) => {
  console.log(calledFrom + ' -> setStatusesExpired');

  dispatch({
    type: 'SET_STATUSESEXPIRED',
  });
};
