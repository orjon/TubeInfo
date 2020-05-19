import React, { Component } from 'react';
import axios from 'axios';
import {v4 as uuid} from 'uuid';
import Map from './Map';
import LineArrivals from './LineArrivals';
import Facilities from './Facilties';
import './Section.scss';
import './Station.scss';
// import IconWifi from './icons/wifi.svg';
// import IconATM from './icons/atm.svg';


class Station extends Component {
  static defaultProps={
    station: {
      id: undefined,
      url: 'loading...',
      name: 'loading...',
      address: '',
      lat: 0,
      lng: 0,
      lines: [],
      contact: [
        {value: 'the address'},
        {value: 'the phone number'}
      ]
    }
  }

  constructor(props){
    super(props);
    this.state={
      arrivals:[],
      station: this.props.station
    }
    this.getArrivals = this.getArrivals.bind(this)
  }

  async getArrivals(){
    const { apiString, station } = this.props
    if (station.id === undefined){ return }
    // let station = this.findStationFromUrl(this.props.routeProps.match.params.url)
    const stationId = station.id
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
      arrivals: [...arrivals],
      station: {
      id: undefined,
      url: 'loading...',
      name: 'loading...',
      address: '',
      lat: 0,
      lng: 0,
      lines: [],
      contact: [
        {value: 'the address'},
        {value: 'the phone number'}
      ]
    }
    })
  }

  componentDidMount(){
    const { getInfo } = this.props
    // getInfo()
    this.getArrivals()
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
    address = address.split(',')
    address = address.map(lineOfAddress => 
      <div key={uuid()}>{lineOfAddress}</div>
    )
    return address
  }

  findLine(tubeLines, line){
    let index = tubeLines.findIndex(lineX => lineX.id === line);
    return tubeLines[index]
  }

 

  render(){
    const { station, tubeLines } = this.props

    if (this.state.arrivals.length === 0){
      this.getArrivals()
    }

    

    // Loops through each line served by station
      let lineArrivals = station.lines.map(line => 
        <LineArrivals key={line} line={this.findLine(tubeLines, line)} arrivals={this.state.arrivals}/>
      )
    //
    

    let address = station.contact[0].value
    address = this.formatAddress(address)
    let phoneNo = station.contact[1].value
    let location = this.formatLocation(station.lat, station.lng)

    // console.log(address)

    return(
      <section>
        {/* <div className='sectionTitle'>Station Details</div> */}
        <div className='CardSingle'>
          <div className='Card'> 

            <div className='row'>
              <h1>{station.name}</h1>
            </div>

            {/* <div className={`row lineRowDivide`}></div> */}
            <div className='row'>
              <div className='column w100 indent1'>
                <h2>Arrivals</h2>
                {lineArrivals}
              </div>
            </div>

            <div className='row facilities'>
              <div className='column w100 indent1'>
                <h2>Facilities</h2>
                <Facilities facilities={station.facilities}/>
              </div>
            </div>
            
            <div className='row address'>
              <div className='column w50 indent1'>
                <h2>Address</h2>
                <div className='column dataBlock indent2'>
                  {address}
                </div>
              </div> 
              <div className='column w50 indent1'>
                <h2>Telephone</h2>
                <div className='column dataBlock indent2'>
                  {phoneNo}
                </div>
              </div>
            </div>

            <div className='row rowLast'>
              <div className='column w100 indent2'>
                <Map
                    lat={station.lat}
                    lng={station.lng}
                  />
                <div className='row'>
                  <div>{location.lat} {location.lng}</div>
                  <div className='code'>Station ID: {station.id}</div>
                </div>
              </div>

            </div>


          </div>
            
        </div>
      </section>
    )
  }
}

export default Station