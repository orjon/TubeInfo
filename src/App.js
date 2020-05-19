import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import axios from 'axios';
import { kebabCase } from './Helpers';
import Nav from './Nav';
import LineStops from './LineStops'
import LineStatuses from './LineStatuses';
import Station from './Station';
import './App.scss';
import Moment from 'react-moment';
import 'moment-timezone';


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

  componentDidMount(){
    if (this.state.tubeLines.length === 0){
      this.getInfo()
    }
  }


  async getInfo(){
    console.log('Getting statuses...')
    let lines = await this.getStatuses()
    //----------------------------------
    console.log('Getting stop orders...')
    for (let i=0; i<lines.length; i++){
      lines[i].stopOrder = await this.getStopOrder(lines[i].id)
    }
    //----------------------------------
    let stations = []
    for (let i=0; i<lines.length; i++){
      lines[i].stations = await this.getStations(lines[i].id)
      for (let j=0; j<lines[i].stations.length; j++){
        lines[i].stations[j].lines = [lines[i].id]
        stations = this.addStation(lines[i].stations[j], stations)
      }
      // console.log('lines in stations', )
    }
    stations.sort( this.compare );
    // console.log('stations: ',stations)
    // console.log(stations.sort())
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
    let linesInfo = response.data
    linesInfo.map(line => 
      lines.push({
        key: line.id,
        id: line.id,
        name: line.name,
        status: line.lineStatuses[0].statusSeverityDescription,
        reason: line.lineStatuses[0].reason,
        stopOrder: [],
        // stations: []
      })
    )
    return lines
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


  async getStations(lineId){
    const { apiString } = this.props
    let lineStations = []
    let response = await axios.get(`https://api.tfl.gov.uk/Line/${lineId}/StopPoints?tflOperatedNationalRailStationsOnly=false&${apiString}`, {
      headers : {Accept: 'application/json'}
    })
    // console.log('Line Stations:', response.data[1].additionalProperties)
    response.data.map(station => {
      let contact = [
        {key: 'Address', value: undefined},
        {key: 'PhoneNo', value: undefined}
      ]
      let facility = [
        {key: 'Ticket Halls', value: undefined},
        {key: 'Toilets', value: undefined},
        {key: 'Lifts', value: undefined},
        {key: 'Escalators', value: undefined},
        {key: 'WiFi', value: undefined},
        {key: 'Help Points', value: undefined},
        {key: 'Payphones', value: undefined},
        {key: 'Boarding Ramp', value: undefined},
        {key: 'Cash Machines', value: undefined},
        {key: 'Euro Cash Machines', value: undefined},
        {key: 'Waiting Room', value: undefined},
        // {key: 'Gates', value: undefined},
        {key: 'TaxiRankOutsideStation', value: undefined},
        {key: 'Car park', value: undefined},
        {key: 'Left Luggage', value: undefined},
        {key: 'Photo Booths', value: undefined},
        {key: 'Amazon Lockers', value: undefined},
        {key: 'ASDA Click and Collect', value: undefined},
      ]


      let validFacilities = []
      let rejectedValues = ['no', '0']
      let renamedFacilityKeys = ['TaxiRankOutsideStation']
      

      facility.forEach(facility => {
        let facilityObject = station.additionalProperties.find(x => x.key === facility.key)

        

        if (facilityObject && renamedFacilityKeys.includes(facility.key)) {
          facility.key = 'Taxi Rank'
        }


        if (facilityObject && !rejectedValues.includes(facilityObject.value)){
          facility.value = facilityObject.value
          validFacilities.push(facility)
          return
        } 
      });


      let validContacts = []

      contact.forEach(property => {
        let propertyObject = station.additionalProperties.find(x => x.key === property.key)
        if (propertyObject){
          if (!rejectedValues.includes(propertyObject.value)){
            property.value = propertyObject.value
            validContacts.push(property)
            return
          }
        } 
      });

      return lineStations.push({
        key: station.id,
        id: station.id,
        url: kebabCase(this.trimStationName(station.commonName)),
        name: this.trimStationName(station.commonName),
        lat: station.lat,
        lng: station.lon,
        contact: [...validContacts],
        facilities: validFacilities
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


  addStation(newStation, stations){
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
              <LineStatuses
                {...routeProps}
                tubeLines={this.state.tubeLines}
              />
            )}
          />
          <Route
            exact
            path='/line/:id'
            render={(routeProps) => (
              <LineStops
                {...routeProps} 
                tubeLines={this.state.tubeLines}
                stations={this.state.stations}
                line={this.findLine(routeProps.match.params.id)}

                // lineIndex={this.findLineIndex(routeProps.match.params.id)}
              />
            )}
          />
          <Route
            exact
            path='/station/:url'
            render={(routeProps) => (
              <Station
                {...routeProps} 
                tubeLines={this.state.tubeLines}
                apiString={this.props.apiString}
                station={this.findStationFromUrl(routeProps.match.params.url)}
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

// [
//   {
//     "$type": "Tfl.Api.Presentation.Entities.StopPointCategory, Tfl.Api.Presentation.Entities",
//     "category": "Accessibility",
//     "availableKeys": [
//       "SpecificEntranceRequired",
//       "TaxiRankOutsideStation",
//       "SpecificEntranceInstructions",
//       "Toilet",
//       "AddtionalInformation",
//       "LimitedCapacityLift",
//       "AccessViaLift",
//       "BlueBadgeCarParkSpaces",
//       "ToiletNote"
//     ]
//   },
//   {
//     "$type": "Tfl.Api.Presentation.Entities.StopPointCategory, Tfl.Api.Presentation.Entities",
//     "category": "Address",
//     "availableKeys": [
//       "Address",
//       "PhoneNo"
//     ]
//   },
//   {
//     "$type": "Tfl.Api.Presentation.Entities.StopPointCategory, Tfl.Api.Presentation.Entities",
//     "category": "Direction",
//     "availableKeys": [
//       "Towards",
//       "CompassPoint"
//     ]
//   },
//   {
//     "$type": "Tfl.Api.Presentation.Entities.StopPointCategory, Tfl.Api.Presentation.Entities",
//     "category": "key",
//     "availableKeys": [
//       "Boarding Ramp",
//       "Lifts",
//       "Boarding Ramps",
//       "Escalators",
//       "Cash Machines",
//       "Waiting Room",
//       "Bridge",
//       "Car park",
//       "Euro Cash Machines",
//       "Payphones",
//       "ASDA Click and Collect",
//       "Ticket Halls",
//       "Amazon Lockers",
//       "Other Facilities",
//       "Help Points",
//       "WiFi",
//       "Gates",
//       "Toilets",
//       "Left Luggage",
//       "Photo Booths"
//     ]
//   },
//   {
//     "$type": "Tfl.Api.Presentation.Entities.StopPointCategory, Tfl.Api.Presentation.Entities",
//     "category": "Geo",
//     "availableKeys": [
//       "Zone"
//     ]
//   },
//   {
//     "$type": "Tfl.Api.Presentation.Entities.StopPointCategory, Tfl.Api.Presentation.Entities",
//     "category": "NearestPlaces",
//     "availableKeys": [
//       "SourceSystemPlaceId"
//     ]
//   },
//   {
//     "$type": "Tfl.Api.Presentation.Entities.StopPointCategory, Tfl.Api.Presentation.Entities",
//     "category": "Opening Time",
//     "availableKeys": [
//       "SatFrom",
//       "MonFriTo",
//       "SatTo",
//       "SunTo",
//       "MonFriFrom",
//       "SunFrom"
//     ]
//   },
//   {
//     "$type": "Tfl.Api.Presentation.Entities.StopPointCategory, Tfl.Api.Presentation.Entities",
//     "category": "ServiceInfo",
//     "availableKeys": [
//       "Night"
//     ]
//   },
//   {
//     "$type": "Tfl.Api.Presentation.Entities.StopPointCategory, Tfl.Api.Presentation.Entities",
//     "category": "StationOwnedByTfl",
//     "availableKeys": [
//       "OwnedByTfl"
//     ]
//   },
//   {
//     "$type": "Tfl.Api.Presentation.Entities.StopPointCategory, Tfl.Api.Presentation.Entities",
//     "category": "VisitorCentre",
//     "availableKeys": [
//       "Location"
//     ]
//   }
// ]