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
      tubeLines: []
    }
    this.getStops = this.getStops.bind(this)
    this.getStatuses = this.getStatuses.bind(this)
  }

  componentDidMount(){
    if (this.state.tubeLines.length === 0){
      this.getStatuses()
    }
  }




  //  async getInfo(){
  //   let lines = []
  //   let response = await axios.get('https://api.tfl.gov.uk/line/mode/tube/status', {
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


  async getStatuses(){
    const { apiString } = this.props
    let lines = []
    // let lineObj = {}
    let response = await axios.get(`https://api.tfl.gov.uk/line/mode/tube/status?${apiString}`, {
      headers : {Accept: 'application/json'}
    })
    console.log('Statuses received')
    // console.log(response)
    let linesInfo = response.data.sort()
    // console.log(linesInfo);
    linesInfo.map(line => 
      lines.push({
        key: line.id,
        id: line.id,
        lineName: line.name,
        status: line.lineStatuses[0].statusSeverityDescription,
        reason: line.lineStatuses[0].reason,
        // stops: this.getStops(line.id)
        stops: []
      })
    )

    // Convert data to be ojbects with id as key
    // for (let i=0; i < lines.length; i++){
    //   lineObj[lines[i].id] = lines[i]
    // }
    // console.log(lineObj)

    this.setState({tubeLines: lines})
    console.log(this.state.tubeLines)
  }



  // async getAllStops(){
  //   console.log('Getting stops')
  //   let stops = []
  //   let response =''
  //   this.state.tubeLines.map(line => (
  //     response = await axios.get(`https://api.tfl.gov.uk/Line/${line.lineName}/StopPoints?tflOperatedNationalRailStationsOnly=false`, {
  //     headers : {Accept: 'application/json'}
  //   })
  //   ))
  //   let lineStops = response.data
  //   let thisLine = line, lineStops
  //   console.log(thisLine)
  //   // lineStops.map(stop => 
  //   //   stops.push({
  //   //     key: stop.id,
  //   //     id: stop.id,
  //   //     stopName: stop.commonName
  //   //   })
  //   // )
    
  //   console.log(stops)
  //   // this.findLineIndex(line)
  //   // this.setState({tubeLines.line: lines})
  // }

  async getStops(line){
    let lineIndex = this.findLineIndex(line)
    console.log('getStops Line[',lineIndex,']: ', line)
    let { tubeLines } = this.state.tubeLines
    const { apiString } = this.props
    let stops = []
    let response = await axios.get(`https://api.tfl.gov.uk/Line/${line}/StopPoints?tflOperatedNationalRailStationsOnly=false&${apiString}`, {
      headers : {Accept: 'application/json'}
    })
    let lineStops = response.data
    lineStops.map(stop => 
      stops.push({
        key: stop.id,
        id: stop.id,
        stopName: stop.commonName
      })
    )
    console.log(this.state.tubeLines[lineIndex].lineName)
    console.log('getStops:', stops)
    // this.setState({ tubeLines[line].stops: lines})
    return stops;
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
              <LineStatuses {...routeProps} tubeLines={this.state.tubeLines}/>
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
                tubeLines={this.state.tubeLines}
                line={this.findLine(routeProps.match.params.id)}
                // apiString={this.props.apiString}
                getStops={this.getStops}
                getStatuses={this.getStatuses}
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
