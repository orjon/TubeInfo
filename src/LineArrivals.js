import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {v4 as uuid} from 'uuid';

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
      <div className='row LineArrivals'>
        <div className='columnm w100'>
          <Link to={`/line/${line.id}`}>
            <div key={line} className={`row lineColor ${line.id}`}></div>
            <div className='row linkTo'>
              <h2 >{line.name}</h2>
              <div className='status'>{line.status}</div>
            </div>
          </Link>
          <div className='row'>
            <h3 className='column'>Towards</h3>
            <h3 className='column end'>Expected Arrival</h3>
          </div>
          {arrivals}
        </div>
      </div>
    )
  }
}

export default Arrivals;


