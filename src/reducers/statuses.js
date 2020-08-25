// STATUSES STATE
const initialState = {
  tubeStatuses: [],
  loading: true,
  error: {}
}

export default function(state = initialState, action){
  const { type, payload } = action;

  switch(type) {
    case 'GET_STATUSES': 
      return {
        ...state, 
        tubeStatuses: payload,
        loading: false

      }
    case 'STATUS_ERROR':
      return {
        ...state,
        error: payload,
        loading: true
      }
    default:
      return state;
  }
}

