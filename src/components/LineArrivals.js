import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import { connect } from 'react-redux';
import '../scss/LineArrivals.scss';
// import Moment from 'react-moment';
// import 'moment-timezone';


const LineArrivals = ({tube: {allArrivals}, ...props}) => {
  const { line } = props

  console.log('Line',line)

  console.log('LineArrivals: ',allArrivals )

  let arrivals = allArrivals
    .filter(arrival => arrival.lineId === line.id)
    .map(arrival => 
      <div className='row' key={uuid()}>
        <div >{arrival.towards}</div>
        <div className='end'>{arrival.expected}</div>
      </div>
    )

  console.log('arrivals: ',arrivals )

    let noArrivals = false;

    if (arrivals.length === 0){
      noArrivals = true;
    }

  
  let lightColors = ['hammersmith-city','waterloo-city', 'circle']
  let lightColor = ''

    if (lightColors.includes(line.id)){
      lightColor = 'lightColor'
    }
  
    return(
      <div className='column dataBlock indent2'>
        <Link className='row' to={`/line/${line.id}`}>
          <div className='column w100 b1'>
            <div key={line.id} className={`row lineColor ${line.id}`}>
              <div className={`${lightColor}`}>{line.name}</div>
            </div>


            <div className='row linkTo'>
              {/* <h3 >{line.name}</h3> */}
              <div className='status'>{line.status}</div>
            </div>
          </div>
        </Link>

        {/* <div className='row'>
          <h4 className='infoLabel'>Towards</h4>
          <h4 className='infoLabel end'>Expected Arrival</h4>
        </div> */}

        { !noArrivals &&
          <div className='row'>
            <h4 className='infoLabel'>Towards</h4>
            <h4 className='infoLabel end'>Expected Arrival</h4>
          </div>
          }

        {/* <div className={`row lineRowDivide`}></div> */}
        {arrivals}
        {/* <div className={`row lineRowDivide`}></div> */}
      </div>
    )
  }

  const mapStateToProps = (state) => {
    return {
      tube: state.tube
    }
  }
  
  export default connect(mapStateToProps, { })(LineArrivals);
  
  




// class LineArrivals extends Component{


//   render(){
//     const { line } = this.props
//     let allArrivals = this.props.arrivals

//     let arrivals = allArrivals
//       .filter(arrival => arrival.lineId === line.id)
//       .map(arrival => 
//         <div className='row' key={uuid()}>
//           <div >{arrival.towards}</div>
//           <div className='end'>{arrival.expected}</div>
//         </div>
//       )

//       let noArrivals = false;

//       if (arrivals.length === 0){
//         noArrivals = true;
//       }

    
//     let lightColors = ['hammersmith-city','waterloo-city', 'circle']
//     let lightColor = ''

//       if (lightColors.includes(line.id)){
//         lightColor = 'lightColor'
//       }
  

//     return(
//       <div className='column dataBlock indent2'>
//           <Link className='row' to={`/line/${line.id}`}>
//             <div className='column w100 b1'>
//               <div key={line.id} className={`row lineColor ${line.id}`}>
//                 <div className={`${lightColor}`}>{line.name}</div>
//               </div>


//               <div className='row linkTo'>
//                 {/* <h3 >{line.name}</h3> */}
//                 <div className='status'>{line.status}</div>
//               </div>
//             </div>
//           </Link>

//             {/* <div className='row'>
//               <h4 className='infoLabel'>Towards</h4>
//               <h4 className='infoLabel end'>Expected Arrival</h4>
//             </div> */}

//           { !noArrivals &&
//             <div className='row'>
//               <h4 className='infoLabel'>Towards</h4>
//               <h4 className='infoLabel end'>Expected Arrival</h4>
//             </div>
//            }

//           {/* <div className={`row lineRowDivide`}></div> */}
//           {arrivals}
//           {/* <div className={`row lineRowDivide`}></div> */}
//         </div>
//     )
//   }
// }

// export default LineArrivals;




