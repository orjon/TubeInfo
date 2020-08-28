// STATIONS STATE
const initialState = {
  stations: [],
  loading: true,
  error: {}
}

export default function(state = initialState, action){
  const { type, payload } = action;

  switch(type) {
    case 'GET_LINESTATIONS':
      return {
        ...state,
        stations: [...state.stations, payload],
        // Filters out existing match to payload.id
        // stations: [...state.stations.filter(line => line.id !== payload.id), payload],
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