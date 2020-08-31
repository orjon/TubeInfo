import React, { useEffect, Fragment } from 'react';
import LineStop from './LineStop';
import { connect } from 'react-redux';
import { getStatuses, getLineStations} from '../actions/tube';
import { findLineName } from '../Helpers';
import '../scss/Section.scss';
import '../scss/LineStops.scss';



const LineStops = ({ getLineStations, getStatuses, tube: { lineStations, lineStatuses, stations }, ...props }) => {
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


  // console.log('--- LineStops.js ---')
  const lineId = props.match.params.id
  let lineIndex = undefined
  let lineName = 'Loading...'
  let lineStops = []

  // // Find line name
  // if (lineStatuses.length !== 0) {
  //   const idMatch = (element) => element.id === lineId;
  //   let indexOfLine = lineStatuses.findIndex(idMatch)
  //   lineName = lineStatuses[indexOfLine].name
  // }

  if (lineStatuses.length !== 0) {
    lineName = findLineName(lineStatuses, lineId)
  }

  

  if ((lineStations.length === lineStatuses.length) && (lineStatuses.length !== 0)) {
    lineIndex = lineStations.findIndex(line => line.id === lineId);
    lineStops = lineStations[lineIndex].stations
  }



  const lightColors = ['hammersmith-city','waterloo-city', 'circle']
  let lightColor = ''

  if (lightColors.includes(lineId)){
    lightColor = 'lightColor'
  }

  console.log('Rendering: ',lineId)
  
  return(

  <section>
    {/* <div className='sectionTitle'>Line Details</div> */}
    <div className='CardSingle'> 
      <div className='Card'>
        <div className={`row lineColor ${lineId}`}>
          <div className={`${lightColor}`}>{lineName}</div>
        </div>
        {(lineStops.length === 0) ? 'Loading...' : 
        <Fragment>
          {/* <div className='row'>
            <div className='status'>Stations: {lineStops.length}</div>
          </div> */}

          <div className='row'>
            <div className='column w100 indent1'>
              <h2>Stations Served ({lineStops.length})</h2>
              <div className='LineStops dataBlock indent2'>
                {/* <div className='row'>
                  <h4 className='infoLabel'>Station</h4>
                  <h4 className='infoLabel end'>Lines Served</h4>
                </div>  */}
                {lineStops.map(stop => {
                  let station = stations.find( station => station.id === stop.id )
                  return <LineStop key={station.id} station={station}/>
                  }
                )}
              </div>
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

export default connect(mapStateToProps, { getStatuses, getLineStations })(LineStops);


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

