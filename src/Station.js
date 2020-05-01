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
      lon: 0,
      lines: []
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: this.props.station.lat,
        lng: this.props.station.lon
      }
    };
    this.markers = []
  }


  componentDidMount() {
    // const map = 
    // new mapboxgl.Map({
    //   container: this.mapContainer,
    //   style: 'mapbox://styles/mapbox/streets-v11',
    //   center: [this.state.lng, this.state.lat],
    //   zoom: this.state.zoom
    // });
  }

  goToStatuses = () => {
    this.props.history.push(`/`);
  }



  render(){
    const { station } = this.props

    let lineBars = station.lines.map(line => 
      <div key={line} className={`row lineColor ${line}`}>{line.name}</div>
    )

    

    return(
      <section>
        <h3 className='sectionHeader'>Station Details</h3>
        <main className='LineStops'>
          <div className={`card line`}> 
            <div className='details'>
              <div className='row lineName'>
                <h3 className='name'>{station.name}</h3>
                <p className='status'>Stations: </p>
              </div>
              {this.state.location &&
                <Map
                  location={this.state.location}
                />
              }
              {/* {this.state.points &&
                <Map
                  center={this.mapCenter}
                  points={this.state.points}
                  onClick={this.handleClick}
                />
              } */}
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