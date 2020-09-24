import { initialStations } from './initialStations';
import { initialStatuses } from './initialStatuses';


// tube STATE
const initialState = {
  lineStatuses: initialStatuses,
  loadedStatuses: false,
  statusesTimeStamp: undefined,
  statusesAge: undefined,
  lineStations: [],
  stations: initialStations, 
  loadedStations: false,
  allArrivals: [],
  lines: [],
  index: '',
  loadingLineStations: true,
  loadingStationArrivals: true,
  error: {}
}

export default function(state = initialState, action){
  const { type, payload } = action;

  switch(type) {
    case 'GET_STATUSES': 
      return {
        ...state, 
        lineStatuses: payload[0],
        statusesTimeStamp:  payload[1],
        loadedStatuses: true
      }

    case 'SET_STATUSAGE':
      return {
        ...state, 
        statusesAge: payload,
      }

    case 'GET_LINESTATIONS':
      return {
        ...state,
        stations: payload.stations,
        loadedStations: true,
        lineStations: [...state.lineStations, payload.lineStations],
        loadingLineStations: false
      }

    case 'GET_STATIONARRIVALS':
      return {
        ...state,
        allArrivals: payload,
        loadingStationArrivals: false
      }

    case 'STATUS_ERROR':
      return {
        ...state,
        error: payload,
        loadedStatuses: true
      }
    default:
      return state;
  }
}



