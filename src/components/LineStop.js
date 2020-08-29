import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/LineStop.scss';

const LineStop= ({ station}) => { 
  // console.log(station.name)
  return(
    <div className='row lineStop'>

      <Link className='w50 lineName' to={`/station/${station.url}`}>
        {station.name}
      </Link>

      {/* <div className='column w50 linesBlock'>
        {lines}
      </div> */}
      
    </div>
  )
}



export default LineStop;


// class LineStop extends Component{
//   static defaultProps={
//     thisStation: {
//       lines: []
//     },
//     station: {
//       id : undefined
//     }
//   }

//   constructor(props){
//     super(props);
//     this.findStationFromId = this.findStationFromId.bind(this)
//   }

//   lineName(tubeLines, line){
//     let index = tubeLines.findIndex(lineX => lineX.id === line);
//     return tubeLines[index].name
//   }

//   lineId(tubeLines, line){
//     let index = tubeLines.findIndex(lineX => lineX.id === line);
//     return tubeLines[index].id
//   }

//   findStationFromId = (stationToFind) => {
//     return this.props.stations.filter( station => station.id === stationToFind);
//   }


//   render(){
//     let { station, tubeLines, thisStation} = this.props
//     let lines = []

//     thisStation = this.findStationFromId(station.id).pop()
//     // console.log('thisStation: ',thisStation.lines)


//     lines = thisStation.lines.map(line => {
//     // Check for light color to format text color if needed
//       let lightColors = ['hammersmith-city','waterloo-city', 'circle']
//       let lightColor = ''

//       if (lightColors.includes(line)){
//         lightColor = 'lightColor'
//       }
//     //


//       return <Link key={line} to={`/line/${this.lineId(tubeLines, line)}`}>
//                 <div className={`lineCell ${line} ${lightColor}`}>
//                   {this.lineName(tubeLines, line)}
//                 </div>
//               </Link>
//     })


  
//     return(
//       <div className='row lineStop'>
//         <Link className='w50 lineName' to={`/station/${station.url}`}>
//           {station.name}
//         </Link>

//         <div className='column w50 linesBlock'>
//           {lines}
//         </div>
        
//       </div>
//     )
//   }
// }

// export default LineStop;
