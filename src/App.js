import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav';
import LineStops from './components/LineStops'
import LineStatuses from './components/LineStatuses';
import Station from './components/Station';
import './scss/App.scss';

//reduxStore
//COnnect react & redux:
import { Provider } from 'react-redux';
//bring in store
import store from './store';

// import Moment from 'react-moment';
// import 'moment-timezone';


class App extends Component {
  static defaultProps = {
    apiString: `app_id=${process.env.REACT_APP_TFL_API_ID}&app_key=${process.env.REACT_APP_TFL_APP_KEY}`,
    mapboxToken: process.env.REACT_APP_MAPBOX_TOKEN
  }

  constructor(props){
    super(props);
    this.state={
      tubeLines: [],
      stations: [],
    }
  }



  async getStopOrder(lineId){
    const { apiString } = this.props
    let response = await axios.get(`https://api.tfl.gov.uk/Line/${lineId}/Route/Sequence/all?${apiString}`, {
      headers : {Accept: 'application/json'}
    })
    // console.log('Got:', lineId)
    let stopOrder = response.data.orderedLineRoutes
    return stopOrder
  }

  checkProperties(property){
    if (property){
      property = property.value
      return property
    } 
    property = undefined
    return property
  }



  // addStation(newStation, stations){
  //   let foundIndex = stations.findIndex(station => station.id === newStation.id);
  //   if (foundIndex !== -1){
  //     stations[foundIndex].lines.push(newStation.lines[0])
  //   } else {
  //     stations = [...stations, newStation]
  //   }
  //   return stations
  // }

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

  findStationFromUrl = (stationToFind) => {
    return this.state.stations.find(function(station){
      return station.url === stationToFind;
    })
  }

  findStationFromId = (stationToFind) => {
    return this.state.stations.findIndex( station => station.id === stationToFind);
  }


  findLineIndex = (lineToFind) => {
    let index = this.state.tubeLines.findIndex(line => line.id === lineToFind)
    return index
  }


  render(){
    return (
      <Provider store={store}>
        <div className='App'>
          <header>
            <Nav />
          </header>
          <Switch>
            
            {/* <Route exact path='/line/:id' component = { LineStops }/> */}

            <Route exact path='/line/:id'
              render={(routeProps) => (
                <LineStops
                  {...routeProps} 
                  // tubeLines={this.state.tubeLines}
                  // stations={this.state.stations}
                  // line={this.findLine(routeProps.match.params.id)}
                  // lineIndex={this.findLineIndex(routeProps.match.params.id)}
                />
              )}
            />


            <Route exact path='/station/:url'
              render={(routeProps) => (
                <Station
                  {...routeProps} 
                  // tubeLines={this.state.tubeLines}
                  // apiString={this.props.apiString}
                  station={this.findStationFromUrl(routeProps.match.params.url)}
                />
              )}
            />

            <Route path='/' component = { LineStatuses }/>
          </Switch>
    
          <footer className='right'>
            <a href='http://www.orjon.com'>orjon.com</a>
          </footer>
        </div>
      </Provider>

    );
  }

  
}

export default App;