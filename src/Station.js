import React, { Component } from 'react';
import axios from 'axios';
import Map from './Map';
import Arrivals from './Arrivals';

class Station extends Component {
  static defaultProps={
    station: {
      id: 'loading...',
      url: 'loading...',
      name: 'loading...',
      address: '',
      lat: 0,
      lng: 0,
      lines: []
    }
  }

  constructor(props){
    super(props);
    this.state={
      arrivals:[]
    }
    this.getArrivals = this.getArrivals.bind(this)
  }

  async getArrivals(){
    const { apiString } = this.props
    const stationId = this.props.station.id
    let arrivals = []
    let response = await axios.get(`https://api.tfl.gov.uk/StopPoint/${stationId}/Arrivals?${apiString}`, {
      headers : {Accept: 'application/json'}
    })
    response.data.map(arrival => 
      arrivals.push({
        lineName: arrival.lineName,
        lineId: arrival.lineId,
        platform: arrival.platformName,
        desintation: arrival.destination,
        towards: arrival.towards,
        expected: arrival.expectedArrival
      })
    )
    this.setState({
      arrivals: [...arrivals]
    })
  }


  goToStatuses = () => {
    this.props.history.push(`/`);
  }

  formatLocation(lat, lng){
    lat = lat + '°N'
    if (lng >= 0) {
      lng = lng + '°E'
    } else{
      lng = - lng + '°W'
    }
    return {lat: lat, lng: lng}
  }

  formatAddress(address){
    return address
  }

  render(){
    const { station } = this.props

    let lines = station.lines.map(line => 
      <Arrivals key={line} line={line} arrivals={this.state.arrivals}/>
    )

    if (this.props.station.id !== 'loading...') {
      this.getArrivals()
    }

    let location = this.formatLocation(station.lat, station.lng)
    let address = this.formatAddress(station.address.value)


    return(
      <section>
        <div className='sectionTitle'>Station Details</div>
        <div className='LineStops'>
          <div className='Card'> 
            <div className='row'>
              <div className='title'>{station.name}</div>
              <div className='status'>{location.lat} {location.lng}</div>
            </div>
            <div className='row'>
              {address}
            </div>
              {lines}
            <div className='row'>
              <Map
                lat={station.lat}
                lng={station.lng}
              />
            </div>
            <div className='row'>
             Station ID: {station.id}
            </div>
          </div>
            
        </div>
      </section>
    )
  }
}

export default Station