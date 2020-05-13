import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import './LineArrivals.scss';

class Arrivals extends Component{


  render(){
    const { line } = this.props
    let allArrivals = this.props.arrivals

    let arrivals = allArrivals
      .filter(arrival => arrival.lineId === line.id)
      .map(arrival => 
        <div className='row' key={uuid()}>
          <div className='column'>{arrival.towards}</div>
          <div className='column end'>{arrival.expected}</div>
        </div>
      )

    return(
      <div className='column dataBlock indent4'>
          <Link className='row' to={`/line/${line.id}`}>
            <div className='column w100 b1'>
              <div key={line} className={`row lineColor ${line.id}`}></div>
              <div className='row linkTo'>
                <h3 >{line.name}</h3>
                <div className='status'>{line.status}</div>
              </div>
            </div>

          </Link>
          {(line.status !== 'Planned Closure') &&
            <div className='row'>
              <h4 className='column infoLabel'>Towards</h4>
              <h4 className='column infoLabel end'>Expected Arrival</h4>
            </div>
           }
          {/* <div className={`row lineRowDivide`}></div> */}
          {arrivals}
          {/* <div className={`row lineRowDivide`}></div> */}
        </div>
    )
  }
}

export default Arrivals;

{/* <div className='row LineArrivals'>
<div className='columnm w100'>
  <Link to={`/line/${line.id}`}>
    <div key={line} className={`row lineColor ${line.id}`}></div>
    <div className='row linkTo'>
      <h3 >{line.name}</h3>
      <div className='status'>{line.status}</div>
    </div>
  </Link>
  <div className='row'>
    <h4 className='column'>Towards</h4>
    <h4 className='column end'>Expected Arrival</h4>
  </div>
  {arrivals}
</div>
</div> */}


