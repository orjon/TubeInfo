import axios from 'axios';
import { kebabCase } from '../Helpers';

export const getStatuses = () => async dispatch => {
  console.log('Getting statuses...')
  let t0 = performance.now()
  let lines = []
  const apiString = `app_id=${process.env.REACT_APP_TFL_API_ID}&app_key=${process.env.REACT_APP_TFL_APP_KEY}`
  try {
    // let response = await axios.get(`https://api.tfl.gov.uk/line/mode/tube/status?${apiString}`, {
    //   headers : {Accept: 'application/json'}
    // })

    let response = await axios.get(`http://slowwly.robertomurray.co.uk/delay/5000/url/https://api.tfl.gov.uk/line/mode/tube/status?${apiString}`, {
      headers : {Accept: 'application/json'}
    })
    
    console.log(apiString)
    let lineStatuses = response.data
    lineStatuses.map(line => 
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
    console.log(lineStatuses)
    let tStatuses = performance.now()
    console.log('took ' + ((tStatuses - t0)/1000).toFixed(3) + 's')

    dispatch({
      type: 'GET_STATUSES',
      payload: lines,
    })
  } catch (error) {
    dispatch({
      type: 'STATUS_ERROR',
      payload: { 
        msg: error.response.statusText,
        status: error.response.status
      },
    })
  }

}

export const getStations = (lineId) => async dispatch =>{
  const apiString = `app_id=${process.env.REACT_APP_TFL_API_ID}&app_key=${process.env.REACT_APP_TFL_APP_KEY}`
  let lineStations = []
  let t0 = performance.now()
  try {
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
    let validContacts = []

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
    
  } catch (error) {
    
  }

  
  return lineStations;
}

