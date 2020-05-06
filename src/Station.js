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
      lat: 0,
      lng: 0,
      lines: [],
    }
  }

  constructor(props){
    super(props);
    this.state={
      arrivals:[]
    }
    this.getArrivals = this.getArrivals.bind(this)
  }

  componentDidMount(){
    if (this.props.station.id !== 'loading...') {
      this.getArrivals()
    }
  }

  async getArrivals(){
    const { apiString } = this.props
    const stationId = this.props.station.id
    let arrivals = []
    let response = await axios.get(`http://slowwly.robertomurray.co.uk/delay/1000/url/https://api.tfl.gov.uk/StopPoint/${stationId}/Arrivals?${apiString}`, {
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
    console.log(arrivals)
    this.setState({
      arrivals: arrivals
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

  render(){
    const { station } = this.props

  

    let lines = station.lines.map(line => 
      <Arrivals key={line} line={line} arrivals={this.state.arrivals}/>
      // <div key={line} className={`row lineColor ${line}`}>{line.name}</div>
    )


    let location = this.formatLocation(station.lat, station.lng)

    // let arrivals = this.state.arrivals.map(arrival => 
    //   <div>{arrival.lineName} towards {arrival.towards} : expected {arrival.expected}</div>
    // )

    // this.state.stations.find(function(station){
    //   return station.url === stationToFind;
    // })


    // family.filter(person => person.age > 18);


    return(
      <section>
        <h3 className='sectionHeader'>Station Details</h3>
        <main className='LineStops'>
          <div className='card line'> 
            <div className='details'>
              <div className='row lineName'>
                <h3 className='name'>{station.name} [{station.id}]</h3>
                <p className='status'>{location.lat} {location.lng}</p>
              </div>
              {lines}
              {/* <div className='row'>
                <div className='column'>
                 {lines}
                </div>
                
              </div> */}

              <div className='row'>
                <div className='data'>

                </div>
              </div>
              <div className='row'>
                  <Map
                    lat={station.lat}
                    lng={station.lng}
                  />
                </div>
            </div>
          </div>
          
        </main>
      </section>
    )
  }
}

export default Station