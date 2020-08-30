import React, { useEffect, Fragment } from 'react';
import LineStop from './LineStop';
import { connect } from 'react-redux';
import { getStatuses, getStations} from '../actions/tube'
import '../scss/Section.scss';
import '../scss/LineStops.scss';



const LineStops = ({ getStations, getStatuses, tube: { lineStations, lineStatuses, stations }, ...props }) => {
    useEffect(() => {
    // let t0 = performance.now()
    // Load statuses for name reference if not received already
    if (lineStatuses.length === 0) {
      console.log('Getting statuses (LineStops)..')
      getStatuses()
    }
    // let tStations = performance.now()
    // console.log('That took ' + ((tStations - t0)/1000).toFixed(3) + 's')
  },[])

  useEffect(() => {
    //GEt stations for all Lines 
    // let t0 = performance.now()
    console.log('Getting all stations...')
    if (lineStations.length === 0) {
      for (let i=0; i< lineStatuses.length; i++ ) getStations(lineStatuses[i].id)
    }
  
    // let tStations = performance.now()
    // console.log('That took ' + ((tStations - t0)/1000).toFixed(3) + 's')
  },[lineStatuses,lineStations])

  // useEffect(() => {
  //   //GEt stations for all Lines 
  //   // let t0 = performance.now()
  //   console.log('tube.stations changed...')
  //   sortStations()
  
  //   // let tStations = performance.now()
  //   // console.log('That took ' + ((tStations - t0)/1000).toFixed(3) + 's')
  // },[stations])
//////////////////////

  // useEffect(() => {
  //   const fetchData = async () => {
  //      const data = await getData(1);
  //      setData(data);
  //   }

  //   fetchData();
  // }, []);

/////////////////////////////

  // console.log('--- LineStops.js ---')
  const lineId = props.match.params.id
  let lineIndex = undefined
  let lineName = 'Loading...'
  let lineStops = []

  // Find line name
  if (lineStatuses.length !== 0) {
    const idMatch = (element) => element.id === lineId;
    let indexOfLine = lineStatuses.findIndex(idMatch)
    lineName = lineStatuses[indexOfLine].name
  }

  if ((lineStations.length === lineStatuses.length) && (lineStatuses.length !== 0)) {
    lineIndex = lineStations.findIndex(line => line.id === lineId);
    // console.log('Index of line in Stations:',lineIndex)
    lineStops = lineStations[lineIndex].stations
    // console.log('Number of Stations:',lineStops.length)
    // console.log('Stations:',lineStops)
  }



  const lightColors = ['hammersmith-city','waterloo-city', 'circle']
  let lightColor = ''

  if (lightColors.includes(lineId)){
    lightColor = 'lightColor'
  }
  
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
                {lineStops.map(stop => <LineStop key={stop.id} station={stop}/>)}
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

export default connect(mapStateToProps, { getStatuses, getStations })(LineStops);


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

