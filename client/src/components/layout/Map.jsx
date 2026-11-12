import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const token = import.meta.env.VITE_MAPBOX_TOKEN

const Map = ({ lng, lat }) => {
  const mapDiv = useRef(null)

  useEffect(() => {
    if (!token) return
    mapboxgl.accessToken = token
    const map = new mapboxgl.Map({
      container: mapDiv.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: 15
    })
    map.on('load', () => map.resize())
    return () => map.remove()
  }, [lng, lat])

  if (!token) return <div className='row map'>Map unavailable</div>
  return <div className='row map' ref={mapDiv} />
}

export default Map
