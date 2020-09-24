import React, { useEffect, Fragment } from 'react';
import LineStop from './LineStop';
import { connect } from 'react-redux';
import { getStatuses, setStatusAge, getLineStations} from '../actions/tube';
import { findLineName, findLine } from '../Helpers';
import '../scss/Section.scss';
import '../scss/LineStops.scss';
const moment = require('moment');


const LineStops = ({ getLineStations, setStatusAge, getStatuses, tube: { lineStations, lineStatuses, stations, loadedStatuses, loadedStations }, ...props }) => {
  


  useEffect(() => {
    const timer = setInterval(() => setStatusAge(), 1000);
    return () => clearTimeout(timer);
  }, [setStatusAge]); 
  
  
  
  
  useEffect(() => {
    console.log('>> LineStops')
    window.scrollTo(0, 0)
    // Load lines statuses for name reference if not received already
    if (lineStatuses.length === 0 || !loadedStatuses) {
      console.log('* LineStops: No Statuses')
      getStatuses()
    }

  },[lineStatuses, getStatuses, loadedStatuses])

  useEffect(() => {
    //Get stations for all Lines asyncronously
    const asyncApiCalls = async _ => {
      for (let i=0; i< lineStatuses.length; i++ ){
        // let t0 = performance.now()
        await getLineStations(lineStatuses[i].id)
        // let tStations = performance.now()
        // console.log('That took ' + ((tStations - t0)/1000).toFixed(3) + 's')
      }
    }

    if (lineStations.length === 0) {
      asyncApiCalls()
    }

  },[lineStatuses,lineStations, getLineStations])


  // console.log('--- LineStops.js ---')
  const lineId = props.match.params.id
  let lineIndex = undefined
  let lineName = 'Loading...'
  let line = undefined
  let lineStops = []
  let disruptionReason = undefined
  let statusAgeText='...fetching'

  // // Find line name
  // if (lineStatuses.length !== 0) {
  //   const idMatch = (element) => element.id === lineId;
  //   let indexOfLine = lineStatuses.findIndex(idMatch)
  //   lineName = lineStatuses[indexOfLine].name
  // }

  if (lineStatuses.length !== 0) {
    lineName = findLineName(lineStatuses, lineId)
    line = findLine(lineStatuses, lineId)
  }


  if ((lineStations.length === lineStatuses.length) && (lineStatuses.length !== 0) && (loadedStations)) {
    lineIndex = lineStations.findIndex(line => line.id === lineId);
    lineStops = lineStations[lineIndex].stations
  }


  if (line.reason) {
    disruptionReason = line.reason
    var cropIndex = disruptionReason.indexOf(':') + 1
    disruptionReason = disruptionReason.substring(cropIndex)
  }



  const lightColors = ['hammersmith-city','waterloo-city', 'circle']
  let lightColor = ''

  if (lightColors.includes(lineId)){
    lightColor = 'lightColor'
  }

  if (line.timeStamp) {
    statusAgeText='updated '+line.statusAge+'s ago'
  }

  
  return(


  <section>
    {/* <div className='sectionTitle'>Line Details</div> */}
    <div className='CardSingle'> 
      <div className='Card'>
        <div className={`row lineColor ${lineId}`}>
          <div className={`${lightColor}`}>{lineName}</div>
        </div>
        {(lineStops.length === 0) ?  
         <Fragment>
          <div className='cardBody'>

            <div className='row titleRow'>
              <div className='status'>Loading...</div>
            </div>

          </div>
        </Fragment> : 
        <Fragment>
          {/* <div className='row'>
            <div className='status'>Stations: {lineStops.length}</div>
          </div> */}
          <div className='cardBody'>

            <div className='row titleRow'>
              <div className='status'>{line.status}</div>
            </div>

            {disruptionReason ? 
              <div className='row'>
                <div className='data'>
                  {disruptionReason}
                </div>
              </div>: ''}


              <div className='row age end'>
                  {statusAgeText} [{moment(line.timeStamp).format('HH:mm:ss')}]
              </div>


            <div className='row titleRow'>
              <div className='status'>Stations Served &#91;{lineStops.length}&#93;: </div>
            </div>

            <div className='LineStops dataBlock'>
              {lineStops.map(stop => {
                let station = stations.find( station => station.id === stop.id )
                return <LineStop key={station.id} station={station}/>
                }
              )}
            </div>

          </div>
        </Fragment>}
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

export default connect(mapStateToProps, { getStatuses, setStatusAge, getLineStations })(LineStops);


// class LineStops extends Component{
//   static defaultProps={
//     line: {
//       id: 'loading...',
//       name: 'loading...',
//       stations: []
//     },
//     tubeLines: {
//     },
//     stations: []
//   }

//   render(){
//     const { line, tubeLines, stations } = this.props

//     let lineStops = line.stations.map(station => 
//       <LineStop key={station.id} station={station} stations={stations} tubeLines={tubeLines}/>
//     )

//     let lightColors = ['hammersmith-city','waterloo-city', 'circle']
//     let lightColor = ''

//       if (lightColors.includes(line.id)){
//         lightColor = 'lightColor'
//       }

//     console.log('line: ',line.id)



//     return(

//       <section>
//         {/* <div className='sectionTitle'>Line Details</div> */}
//         <div className='CardSingle'> 
//           <div className='Card'>
            
//             <div className={`row lineColor ${line.id}`}>
//               <div className={`${lightColor}`}>{line.name}</div>
//             </div>

//             {/* <div className='row'>
//               <div className='status'>Stations: {line.stations.length}</div>
//             </div> */}

//             <div className='row'>
//               <div className='column w100 indent1'>
//                 <h2>Stations Served ({line.stations.length})</h2>
//                 <div className='LineStops dataBlock indent2'>
//                   {/* <div className='row'>
//                     <h4 className='infoLabel'>Station</h4>
//                     <h4 className='infoLabel end'>Lines Served</h4>
//                   </div> */}
//                   {lineStops}
//                 </div>
//               </div>
//             </div>



//           </div>
//         </div>
//       </section>
//     )
//   }
// }

