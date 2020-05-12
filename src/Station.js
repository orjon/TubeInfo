import React, { Component } from 'react';
import axios from 'axios';
import Map from './Map';
import Arrivals from './Arrivals';

class Station extends Component {
  static defaultProps={
    station: {
      id: undefined,
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

  componentDidMount(){
    this.getArrivals()
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
    console.log('Station')
    console.log('station Id: ', station.id)


    let location = this.formatLocation(station.lat, station.lng)
    let address = this.formatAddress(station.contact)


    return(
      <section>
        <div className='sectionTitle'>Station Details</div>
        <div className='LineStops'>
          <div className='Card'> 
            <div className='row'>
              <h1>{station.name}</h1>
            </div>
            <div className='row'>
              <div className='column w50'>
                <h2>Address</h2>
                <p>
                  ...Address...
                </p>
              </div>
              <div className='column w50'>
                <h2>Telephone</h2>
                <p>
                  0207 xxx xxx xxx
                </p>
              </div>
              
            </div>
            <div className='row'>
              <Map
                lat={station.lat}
                lng={station.lng}
              />
            </div>
            <div className='row'>
              <div>{location.lat} {location.lng}</div>
              <div className='code'>Station ID: {station.id}</div>
            </div>
            {lines}
          </div>
            
        </div>
      </section>
    )
  }
}

export default Station