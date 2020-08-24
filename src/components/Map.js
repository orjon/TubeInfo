import React from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: this.props.lng,
      lat: this.props.lat,
      zoom: 15
    };
    this.markers = []
  }
  
  // constructor() {
  //   super()

  //   this.markers = []
  // }

  componentDidMount() {
    // this.map = new mapboxgl.Map({
    //   container: this.mapDiv,
    //   style: 'mapbox://styles/mapbox/streets-v9',
    //   center: this.props.center,
    //   zoom: 12
    // })
    // this.map.on('click', this.props.onClick)
    // this.setMarkers()



    new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

  }




  // setMarkers() {
  //   this.markers.forEach(marker => marker.remove())
  //   this.markers = this.props.points.map(point => {
  //     return new mapboxgl.Marker()
  //       .setLngLat({  lat: point.lat, lng: point.lon })
  //       .addTo(this.map)
  //   })
  //   console.log(this.markers)
  // }

  render() {

    return(
      <div className='row map' ref={el => this.mapDiv = el} />
    )
  }
}

export default Map
