// tube STATE
const initialState = {
  lineStatuses: [],
  lineStations: [],
  lines: [],
  index: '',
  // lineStops: [],
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
      lineStations: [...state.lineStations, payload],
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

