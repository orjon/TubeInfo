import React, { Component } from 'react';
import Map from './Map';
// import mapboxgl from 'mapbox-gl';

class Station extends Component {
  static defaultProps={
    station: {
      id: 'loading...',
      url: 'loading...',
      name: 'loading...',
      lat: 0,
      lng: 0,
      lines: []
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: this.props.station.lat,
        lng: this.props.station.lng
      }
    };
  }


  goToStatuses = () => {
    this.props.history.push(`/`);
  }
  




  render(){
    const { station } = this.props

    let lineBars = station.lines.map(line => 
      <div key={line} className={`row lineColor ${line}`}>{line.name}</div>
    )

    let lat = station.lat + '°N'
    let lng = station.lng

    if (lng >= 0) {
        lng = lng + '°E'
    } else{
      lng = - lng + '°W'
    } 

    return(
      <section>
        <h3 className='sectionHeader'>Station Details</h3>
        <main className='LineStops'>
          <div className={`card line`}> 
            <div className='details'>
              <div className='row lineName'>
                <h3 className='name'>{station.name}</h3>
                <p className='status'>{lat} {lng} </p>
              </div>
              {this.state.location &&
                <Map
                  location={this.state.location}
                />
              }
              {lineBars}
              <div className='row'>
                <div className='data'>
                  data
                </div>
              </div>
            </div>
          </div>
          
        </main>
      </section>
    )
  }
}

export default Station