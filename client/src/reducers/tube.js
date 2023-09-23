import { initialStations } from './initialStations'
import { initialStatuses } from './initialStatuses'
import { initialLineStations } from './initialLineStations'
import { findStationIndexFromId } from '../Helpers'

// tube STATE
const initialState = {
  statuses: initialStatuses,
  statusesExpired: true,
  statusesTimeStamp: undefined,

  stations: initialStations,
  stationsTimeStamp: undefined,
  stationsExpired: true,

  lineStations: initialLineStations,

  error: {}
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'GET_STATUSES':
      return {
        ...state,
        statuses: payload.statuses,
        statusesTimeStamp: payload.statusestimeStamp,
        statusesExpired: false
      }

    case 'SET_STATUSESEXPIRED':
      return {
        ...state,
        statusesExpired: true
      }

    case 'GET_STATIONS':
      return {
        ...state,
        stations: payload.stations,
        lineStations: payload.lineStations,
        stationsTimeStamp: payload.stationsTimeStamp,
        stationsExpired: false
      }

    case 'GET_STATIONARRIVALS':
      const stations = [...state.stations]
      const stationIndex = findStationIndexFromId(stations, payload.stationId)
      const station = stations[stationIndex]

      station.arrivals = payload.arrivals
      station.arrivalsTimeStamp = payload.arrivalsTimeStamp
      stations[stationIndex] = station

      return {
        ...state,
        stations: stations
      }

    case 'STATUS_ERROR':
      return {
        ...state,
        error: payload,
        statusesExpired: false
      }

    default:
      return state
  }
}
