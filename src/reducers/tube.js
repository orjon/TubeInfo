// tube STATE
const initialState = {
  lineStatuses: [],
  lineStations: [],
  // stations: [{id:1}], 
  stations: [], 
  allArrivals: [],
  lines: [],
  index: '',
  loading: true,
  error: {}
}

export default function(state = initialState, action){
  const { type, payload } = action;

  switch(type) {
    case 'GET_STATUSES': 
      return {
        ...state, 
        lineStatuses: payload,
        loading: false
      }

    case 'GET_LINESTATIONS':
      return {
        ...state,
        stations: payload.stations,
        lineStations: [...state.lineStations, payload.lineStations],
        loading: false
      }

    case 'GET_STATIONARRIVALS':
      return {
        ...state,
        allArrivals: payload,
        loading: false
      }

    case 'STATUS_ERROR':
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state;
  }
}



