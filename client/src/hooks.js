import { useQuery } from '@tanstack/react-query'
import { fetchJson } from './api'
import { maxStatusesAge, maxArrivalsAge } from './globalSettings'
import { initialStatuses } from './data/initialStatuses'
import initialStations from '../../data/stations.json'
import initialLineStations from '../../data/lineStations.json'

// Bundled data is shown straight away; initialDataUpdatedAt: 0 marks it stale
// so the live data is fetched immediately.

export function useStatuses() {
  const query = useQuery({
    queryKey: ['statuses'],
    queryFn: () => fetchJson('/statuses'),
    refetchInterval: maxStatusesAge * 1000,
    initialData: { statuses: initialStatuses, statusesTimeStamp: undefined },
    initialDataUpdatedAt: 0
  })
  return {
    statuses: query.data.statuses,
    statusesTimeStamp: query.data.statusesTimeStamp,
    isError: query.isError
  }
}

export function useStations() {
  const query = useQuery({
    queryKey: ['stations'],
    queryFn: () => fetchJson('/stations'),
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    initialData: {
      stations: initialStations,
      lineStations: initialLineStations,
      stationsTimeStamp: undefined
    },
    initialDataUpdatedAt: 0
  })
  return {
    stations: query.data.stations,
    lineStations: query.data.lineStations,
    stationsTimeStamp: query.data.stationsTimeStamp
  }
}

export function useArrivals(stationId) {
  const query = useQuery({
    queryKey: ['arrivals', stationId],
    queryFn: () => fetchJson(`/arrivals/${stationId}`),
    refetchInterval: maxArrivalsAge * 1000,
    enabled: Boolean(stationId)
  })
  return {
    arrivals: query.data?.arrivals,
    arrivalsTimeStamp: query.data?.arrivalsTimeStamp,
    isError: query.isError
  }
}
