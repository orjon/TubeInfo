import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const token = import.meta.env.VITE_MAPBOX_TOKEN

const Map = ({ lng, lat }) => {
  const mapDiv = useRef(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!token) return
    let map
    try {
      mapboxgl.accessToken = token
      map = new mapboxgl.Map({
        container: mapDiv.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: 15
      })
      map.on('load', () => map.resize())
      // e.g. WebGL lost or a tile service error: show the fallback, keep the page
      map.on('error', (event) => {
        if (event?.error?.message?.includes('WebGL')) setFailed(true)
      })
    } catch {
      // WebGL not available (turned off, old device): the rest of the page still works
      setFailed(true)
      return
    }
    return () => map.remove()
  }, [lng, lat])

  if (!token || failed) return <div className='row map'>Map unavailable</div>
  return <div className='row map' ref={mapDiv} />
}

export default Map
