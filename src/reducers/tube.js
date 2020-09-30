import { initialStations } from './initialStations';
import { initialStatuses } from './initialStatuses';
import { initialLineStations } from './initialLineStations';


// tube STATE
const initialState = {
  statuses: initialStatuses,
  loadedStatuses: false,
  statusesTimeStamp: undefined,
  statusesAge: undefined,

  stations: initialStations, 
  loadedStations: false,
  stationsTimeStamp: "2020-01-01T12:00:00+00:00",
  lineStations: initialLineStations,

  allArrivals: [],
  index: '',

  loadingStationArrivals: true,
  error: {}
}

export default function(state = initialState, action){
  const { type, payload } = action;

  switch(type) {
    case 'GET_STATUSES': 
      return {
        ...state, 
        statuses: payload.lines,
        statusesTimeStamp:  payload.timeStamp,
        loadedStatuses: true
      }

    case 'SET_STATUSAGE':
      return {
        ...state, 
        statusesAge: payload[0],
        loadedStatuses: payload[1]
      }

    case 'GET_LINESTATIONS':
      return {
        ...state,
        stations: payload.stations,
        loadedStations: true,
        lineStations: [...state.lineStations, payload.lineStations],
        stationsTimeStamp: payload.timeStamp
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



