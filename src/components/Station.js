import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getStatuses, getLineStations, getStationArrivals} from '../actions/tube';
import {v4 as uuid} from 'uuid';
import Map from './Map';
import Facilities from './Facilties';
import LineArrivals from '../components/LineArrivals';
import '../scss/Section.scss';
import '../scss/Station.scss';
// import IconWifi from './icons/wifi.svg';
// import IconATM from './icons/atm.svg';



const apiString =  `app_id=${process.env.REACT_APP_TFL_API_ID}&app_key=${process.env.REACT_APP_TFL_APP_KEY}`
//   mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN



const Station = ({ getLineStations, getStatuses, getStationArrivals, tube: { lineStations, lineStatuses, stations, arrivals }, ...props }) => {
  useEffect(() => {
    // Load statuses for name reference if not received already
    if (lineStatuses.length === 0) {
      console.log('Getting statuses (LineStops)..')
      getStatuses()
    }
  },[])

  useEffect(() => {
    //Get stations for all Lines asyncronously

    const asyncApiCalls = async _ => {
      for (let i=0; i< lineStatuses.length; i++ ){
        let t0 = performance.now()
        await getLineStations(lineStatuses[i].id)
        let tStations = performance.now()
        console.log('That took ' + ((tStations - t0)/1000).toFixed(3) + 's')
      }
    }

    if (lineStations.length === 0) {
      asyncApiCalls()
    }

  },[lineStatuses,lineStations])

  useEffect(() => {
    if (station) getStationArrivals(station)
  },[stations])


  const findLine = (idToFind) => {
    return lineStatuses.find(function(line){
      return line.id === idToFind;
    })
  }


  const formatAddress = (address) => {
    address = address.split(',')
    address = address.map(lineOfAddress => 
      <div key={uuid()}>{lineOfAddress}</div>
    )
    return address
  }

  const formatLocation = (lat, lng) =>{
    lat = lat + '°N'
    if (lng >= 0) {
      lng = lng + '°E'
    } else{
      lng = - lng + '°W'
    }
    return {lat: lat, lng: lng}
  }


  const stationUrl = props.match.params.url

  const station = stations.find(station => station.url === stationUrl)
  let address =''
  let phoneNo = ''
  let location = ''
  let lineArrivals = ''

  if (station) {
    console.log('station:',station.name)
    address = station.contact[0].value

    // Harrow on the Hill error fix - but not working!
    // if (station.id === 'ID940GZZLUHOH') {address = 'Station Rd, Harrow HA1 1BB'}

    address = formatAddress(address)
    phoneNo = station.contact[1].value
    location = formatLocation(station.lat, station.lng)

    // console.log(address)

    // Loops through each line served by station
    lineArrivals = station.lines.map(line => <LineArrivals key={line} line={(findLine(line))} arrivals={arrivals}/>)
    

  }


  
  return(
    <section>

      {/* <div className='sectionTitle'>Station Details</div> */}
      <div className='CardSingle'>
        <div className='Card'> 

          <div className='row'>
            {/* <h1>Station Name</h1> */}
            {station ? <h1>{station.name}</h1> : <h1>Loading...</h1>}
          </div>

          {station?  
              
            <Fragment>
              <div className='row'>
                <div className='column w100 indent1'>
                  <h2>Arrivals</h2>
                  {lineArrivals}
                </div>
              </div>

              <div className='row'>
                <div className='column w100 indent2'>
                  <Map lat={station.lat} lng={station.lng}/>
                  <div className='row'>
                    <div>{location.lat} {location.lng}</div>
                    <div className='code'>Station ID: {station.id}</div>
                  </div>
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

              <div className='row facilities'>
                <div className='column w100 indent1'>
                  <h2>Facilities</h2>
                  <Facilities facilities={station.facilities}/>
                </div>
              </div>
            </Fragment> 
          : ''}

        </div>
          
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    tube: state.tube,
  }
}

export default connect(mapStateToProps, { getStatuses, getLineStations, getStationArrivals })(Station);





// class Station extends Component {
//   static defaultProps={
//     station: {
//       id: undefined,
//       url: 'loading...',
//       name: 'loading...',
//       address: '',
//       lat: 0,
//       lng: 0,
//       lines: [],
//       contact: [
//         {value: 'the address'},
//         {value: 'the phone number'}
//       ]
//     }
//   }

//   constructor(props){
//     super(props);
//     this.state={
//       arrivals:[],
//       station: this.props.station
//     }
//     this.getArrivals = this.getArrivals.bind(this)
//   }

//   async getArrivals(){
//     const { apiString, station } = this.props
//     if (station.id === undefined){ return }
//     // let station = this.findStationFromUrl(this.props.routeProps.match.params.url)
//     const stationId = station.id
//     let arrivals = []
//     let response = await axios.get(`https://api.tfl.gov.uk/StopPoint/${stationId}/Arrivals?${apiString}`, {
//       headers : {Accept: 'application/json'}
//     })
//     response.data.map(arrival => 
//       arrivals.push({
//         lineName: arrival.lineName,
//         lineId: arrival.lineId,
//         platform: arrival.platformName,
//         desintation: arrival.destination,
//         towards: arrival.towards,
//         expected: arrival.expectedArrival
//       })
//     )
//     this.setState({
//       arrivals: [...arrivals],
//       station: {
//       id: undefined,
//       url: 'loading...',
//       name: 'loading...',
//       address: '',
//       lat: 0,
//       lng: 0,
//       lines: [],
//       contact: [
//         {value: 'the address'},
//         {value: 'the phone number'}
//       ]
//     }
//     })
//   }

//   componentDidMount(){
//     // const { getInfo } = this.props
//     // getInfo()
//     window.scrollTo(0, 0);
//     this.getArrivals()
//   }

//   formatLocation(lat, lng){
//     lat = lat + '°N'
//     if (lng >= 0) {
//       lng = lng + '°E'
//     } else{
//       lng = - lng + '°W'
//     }
//     return {lat: lat, lng: lng}
//   }

//   formatAddress(address){
//     address = address.split(',')
//     address = address.map(lineOfAddress => 
//       <div key={uuid()}>{lineOfAddress}</div>
//     )
//     return address
//   }

//   findLine(tubeLines, line){
//     let index = tubeLines.findIndex(lineX => lineX.id === line);
//     return tubeLines[index]
//   }

//   // useEffect(() => {
//   //   window.scrollTo(0, 0)
//   // }, [])

 

//   render(){

//     const { station, tubeLines } = this.props

//     if (this.state.arrivals.length === 0){
//       this.getArrivals()
//     }


//     // Loops through each line served by station
//       let lineArrivals = station.lines.map(line => 
//         <LineArrivals key={line} line={this.findLine(tubeLines, line)} arrivals={this.state.arrivals}/>
//       )
//     //



//     let address = station.contact[0].value

//     // Harrow on the Hill error fix - but not working!
//     if (station.id === 'ID940GZZLUHOH') {address = 'Station Rd, Harrow HA1 1BB'}

//     address = this.formatAddress(address)
//     let phoneNo = station.contact[1].value
//     let location = this.formatLocation(station.lat, station.lng)

//     // console.log(address)

//     return(
//       <section>
//         {/* <div className='sectionTitle'>Station Details</div> */}
//         <div className='CardSingle'>
//           <div className='Card'> 

//             <div className='row'>
//               <h1>{station.name}</h1>
//             </div>

//             {/* <div className={`row lineRowDivide`}></div> */}
//             <div className='row'>
//               <div className='column w100 indent1'>
//                 <h2>Arrivals</h2>
//                 {lineArrivals}
//               </div>
//             </div>

//             <div className='row'>
//               <div className='column w100 indent2'>
//                 <Map
//                     lat={station.lat}
//                     lng={station.lng}
//                   />
//                 <div className='row'>
//                   <div>{location.lat} {location.lng}</div>
//                   <div className='code'>Station ID: {station.id}</div>
//                 </div>
//               </div>
//             </div>

//             <div className='row address'>
//               <div className='column w50 indent1'>
//                 <h2>Address</h2>
//                 <div className='column dataBlock indent2'>
//                   {address}
//                 </div>
//               </div> 
//               <div className='column w50 indent1'>
//                 <h2>Telephone</h2>
//                 <div className='column dataBlock indent2'>
//                   {phoneNo}
//                 </div>
//               </div>
//             </div>

//             <div className='row facilities'>
//               <div className='column w100 indent1'>
//                 <h2>Facilities</h2>
//                 <Facilities facilities={station.facilities}/>
//               </div>
//             </div>

//           </div>
            
//         </div>
//       </section>
//     )
//   }
// }

// export default Station