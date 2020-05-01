import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import LineStops from './LineStops'
import LineStatuses from './LineStatuses';
import Station from './Station';
import './App.scss';


class App extends Component {
  static defaultProps = {
    apiString: `app_id=${process.env.REACT_APP_TFL_API_ID}&app_key=${process.env.REACT_APP_TFL_APP_KEY}`,
    mapboxToken: process.env.REACT_APP_MAPBOX_TOKEN
  }

  constructor(props){
    super(props);
    this.state={
      tubeLines: [],
      stations:[]
    }
  }

  componentDidMount(){

    if (this.state.tubeLines.length === 0){
      this.getInfo()
    }
  }


  async getInfo(){
    let lines = await this.getStatuses()
    let stations = []
    for (let i=0; i<lines.length; i++){
      lines[i].stopOrder = await this.getStopOrder(lines[i].id)
    }
    for (let i=0; i<lines.length; i++){
      lines[i].stations = await this.getStations(lines[i].id)
      for (let j=0; j<lines[i].stations.length; j++){
        lines[i].stations[j].lines = [lines[i].id]
        stations = this.addStation(lines[i].stations[j], stations)
      }
      
    }
    stations.sort( this.compare );
    console.log(stations.sort())
    this.setState({
      tubeLines: lines,
      stations: stations
    })
  }


  async getStatuses(){
    const { apiString } = this.props
    let lines = []
    let response = await axios.get(`https://api.tfl.gov.uk/line/mode/tube/status?${apiString}`, {
      headers : {Accept: 'application/json'}
    })
    // console.log('Got Statuses')
    let linesInfo = response.data
    linesInfo.map(line => 
      lines.push({
        key: line.id,
        id: line.id,
        name: line.name,
        status: line.lineStatuses[0].statusSeverityDescription,
        reason: line.lineStatuses[0].reason,
        stopOrder: [],
        stations: []
      })
    )
    return lines
  }

  
  async getStopOrder(lineId){
    const { apiString } = this.props
    let response = await axios.get(`https://api.tfl.gov.uk/Line/${lineId}/Route/Sequence/all?${apiString}`, {
      headers : {Accept: 'application/json'}
    })
    // console.log('Got Order ', {lineId})
    let stopOrder = response.data.orderedLineRoutes
    return stopOrder
  }


  async getStations(lineId){
    const { apiString } = this.props
    let lineStations = []
    let response = await axios.get(`https://api.tfl.gov.uk/Line/${lineId}/StopPoints?tflOperatedNationalRailStationsOnly=false&${apiString}`, {
      headers : {Accept: 'application/json'}
    })
    // console.log('Got Stations:', {lineId})
    // console.log('Line Stations:', response.data)
    response.data.map(station => {
      let stationName = this.trimStationName(station.commonName)
      let stationUrl = this.kebabCase(stationName)
      return lineStations.push({
        key: station.id,
        id: station.id,
        url: stationUrl,
        name: stationName,
        lat: station.lat,
        lon: station.lon
      })
    })
    return lineStations;
  }

  trimStationName(stationName){
    let trimmedStationName = stationName.replace('Underground Station', '')
    let cropIndex1 = trimmedStationName.indexOf('(') + 2
    if (cropIndex1 !== 0){
      trimmedStationName = trimmedStationName.slice(0, (cropIndex1-2))
    } 
    return trimmedStationName
  }

  kebabCase(inputString){
    let outputString = inputString.toLowerCase().replace(/ /g, '-')
    return outputString
  }

  addStation(newStation, stations){
    // There are 382 total stops on all lines.
    let foundIndex = stations.findIndex(station => station.id === newStation.id);
    if (foundIndex !== -1){
      stations[foundIndex].lines.push(newStation.lines[0])
    } else {
      stations = [...stations, newStation]
    }
    return stations
  }

  compare( stationA, stationB ) {
    if ( stationA.name < stationB.name ){
      return -1;
    }
    if ( stationA.name > stationB.name ){
      return 1;
    }
    return 0;
  }

  //returns single line based on id
  findLine = (idToFind) => {
    return this.state.tubeLines.find(function(line){
      return line.id === idToFind;
    })
  }

  findStation = (stationToFind) => {
    return this.state.stations.find(function(station){
      return station.url === stationToFind;
    })
  }


  findLineIndex = (lineToFind) => {
    let index = this.state.tubeLines.findIndex(line => line.id === lineToFind)
    return index
  }


  render(){
    //this.getStopOrder('northern');
    return (
      <div className='App'>
        <header>
          <Nav />
        </header>
        <Switch>
         
        <Route
            exact
            path='/'
            render={(routeProps) => (
              <LineStatuses
                {...routeProps}
                tubeLines={this.state.tubeLines}
                />
            )}
          />
          <Route
            exact
            path='/tube/status'
            render={(routeProps) => (
              <LineStatuses {...routeProps} tubeLines={this.state.tubeLines}/>
            )}
          />
          <Route
            exact
            path='/line/:id'
            render={(routeProps) => (
              <LineStops
                {...routeProps} 
                // tubeLines={this.state.tubeLines}
                line={this.findLine(routeProps.match.params.id)}
                lineIndex={this.findLineIndex(routeProps.match.params.id)}
              />
            )}
          />
          <Route
            exact
            path='/station/:id'
            render={(routeProps) => (
              <Station
                {...routeProps} 
                station={this.findStation(routeProps.match.params.id)}
              />
            )}
          />
  
        </Switch>
  
        <footer className='right'>
          <a href='http://www.orjon.com'>orjon.com</a>
        </footer>
      </div>
    );
  }

  
}

export default App;


  // axios.all([
  //   axios.get('https://api.github.com/users/abc');
  //   axios.get('https://api.github.com/users/abc/repos')
  //  ])
  //  .then(axios.spread(function (userResponse, reposResponse) {
  //    console.log('User', userResponse.data);
  //    console.log('Repositories', reposResponse.data);
  //  }));




  //  async getInfo(){
  //   let lines = []
  //   let response = await axios.get('http://slowwly.robertomurray.co.uk/delay/3000/url/https://api.tfl.gov.uk/line/mode/tube/status', {
  //     headers : {Accept: 'application/json'}
  //   })
  //   let linesInfo = response.data.sort()
  //   // console.log(linesInfo);
  //   linesInfo.map(line => 
  //     lines.push({
  //       key: line.id,
  //       id: line.id,
  //       lineName: line.name,
  //       status: line.lineStatuses[0].statusSeverityDescription,
  //       reason: line.lineStatuses[0].reason
  //     })
  //   )
  //   console.log(lines);
  //   this.setState({tubeLines: lines})
  //   // this.findLineIndex('central')
  // }
