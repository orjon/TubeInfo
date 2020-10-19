import React, { useEffect, useState, useRef } from 'react'
import mapboxgl from 'mapbox-gl'

const Map = ({lng,lat}) => {
  const [map, setMap] = useState(null);
  const mapDiv = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    const initializeMap = ({ setMap, mapDiv }) => {
      const map = new mapboxgl.Map({
        container: mapDiv.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [lng, lat],
        zoom: 15
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapDiv });
  }, [map, lng, lat]);

  return(
    <div className='row map' ref={el => (mapDiv.current = el)} />
  )
}

export default Map


// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

// const Map = ({lng,lat}) => {

//   const zoom = 15
//   const mapDiv = useRef(null);

//   useEffect(() => {
//     new mapboxgl.Map({
//       container: mapDiv.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       zoom: zoom
//     });
//   },[lng, lat])