import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import LineStops from './LineStops'
import LineStatuses from './LineStatuses';
import './App.scss';


class App extends Component {
  static defaultProps = {
    apiString: `app_id=${process.env.REACT_APP_TFL_API_ID}&app_key=${process.env.REACT_APP_TFL_APP_KEY}`
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
    await this.getStatuses()
    this.getStopOrders()
    // this.getStations()
    }
  
  async getStopOrders(){
    let { tubeLines } = this.state
    const { apiString } = this.props

    for (let i=0; i<tubeLines.length; i++){
      const lineId = tubeLines[i].id
      let response = await axios.get(`https://api.tfl.gov.uk/Line/${lineId}/Route/Sequence/all?${apiString}`, {
        headers : {Accept: 'application/json'}
      })
      console.log('Got Order ', {lineId})
      tubeLines[i].stopOrder = response.data.orderedLineRoutes
    }
    this.setState({ tubeLines: tubeLines })
  }


  //   console.log('Got Stations:', {lineId})
  //   response.data.map(station => 
  //     lineStations.push({
  //       key: station.id,
  //       id: station.id,
  //       name: station.commonName
  //     })
  //   )
  //   return lineStations;



  async getStations(){
    const { apiString } = this.props
    let { tubeLines } = this.state
    let allStations = []

    for (let i=0; i<tubeLines.length; i++){
      const lineId = tubeLines[i].id
      let response = await axios.get(`https://api.tfl.gov.uk/Line/${lineId}/StopPoints?tflOperatedNationalRailStationsOnly=false&${apiString}`, {
        headers : {Accept: 'application/json'}
      })
      console.log('Got Stations:', {lineId})
      let lineStations = []
      response.data.map(station => 
        lineStations.push({
          key: station.id,
          id: station.id,
          name: station.commonName
        })
      )
      tubeLines[i].stations = lineStations
      for (let j=0; j<tubeLines[i].stations.length; j++){
        tubeLines[i].stations[j].line = tubeLines[i].id
        allStations = this.addStation(tubeLines[i].stations[j], allStations)
      }
    }
    this.setState({
      tubeLines: tubeLines,
      stations: allStations })
  }

  addStation(newStation, allStations){
    // There are 382 total stops on all lines.
    let found = undefined
    found = allStations.find(station => station.id === newStation.id);
    found && console.log('Found!', newStation.name)
    !found && console.log('New', newStation.name)
    allStations = [...allStations, newStation]
    return allStations
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

  // async getStations(lineId){
  //   // let lineIndex = this.findLineIndex(lineId)
  //   const { apiString } = this.props
  //   let lineStations = []
  //   let response = await axios.get(`https://api.tfl.gov.uk/Line/${lineId}/StopPoints?tflOperatedNationalRailStationsOnly=false&${apiString}`, {
  //     headers : {Accept: 'application/json'}
  //   })
  //   console.log('Got Stations:', {lineId})
  //   response.data.map(station => 
  //     lineStations.push({
  //       key: station.id,
  //       id: station.id,
  //       name: station.commonName
  //     })
  //   )
  //   return lineStations;
  // }



  // for (let i=0; i<lines.length; i++){
  //   lines[i].stations = this.getStations(lines[i].id)
  //   for (let j=0; j<lines[i].stations.length; j++){
  //     lines[i].stations[j].line = lines[i].id
  //     stations = this.addStation(lines[i].stations[j], stations)
  //   }
  // }
  // stations.sort( this.compare )
  // console.log(stations)



  async getStatuses(){
    const { apiString } = this.props
    let lines = []
    let response = await axios.get(`https://api.tfl.gov.uk/line/mode/tube/status?${apiString}`, {
      headers : {Accept: 'application/json'}
    })
    console.log('Got Statuses')
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
    this.setState({ tubeLines: lines })
  }


  //returns single line based on id
  findLine = (idToFind) => {
    return this.state.tubeLines.find(function(line){
      return line.id === idToFind;
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
                allLines={this.state.tubeLines}
                line={this.findLine(routeProps.match.params.id)}
                lineIndex={this.findLineIndex(routeProps.match.params.id)}
                getStops={this.getStops}
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


  
  // async getStopOrder(lineId){
  //   const { apiString } = this.props
  //   let response = await axios.get(`https://api.tfl.gov.uk/Line/${lineId}/Route/Sequence/all?${apiString}`, {
  //     headers : {Accept: 'application/json'}
  //   })
  //   console.log('Got Order ', {lineId})
  //   let stopOrder = response.data
  //   return stopOrder
  // }



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
