import React, { Component } from 'react'
import {v4 as uuid} from 'uuid';

class Arrivals extends Component{
  constructor(props){
    super(props);
    this.state={
      arrivals:[]
    }
  }

  render(){
    const { line } = this.props
    let allArrivals = this.props.arrivals

    let arrivals1 = allArrivals.filter(arrival => arrival.lineId === line)
    console.log('Arrivals')
    console.log('line:', line)

    let arrivals = arrivals1.map(arrival => 
      <div className='row' key={uuid()}>
        <div className='column'>{arrival.towards}</div>
        <div className='column end'>{arrival.expected}</div>
      </div>
    )

    return(
      <div>
        <div key={line} className={`row lineColor ${line}`}>{line.name}</div>
        <div className='row'>
          <h1>{line.name}</h1>
          <div className='status'></div>
        </div>
        <div className='row'>
          <h3 className='column'>Towards</h3>
          <h3 className='column end'>Expected Arrival</h3>
        </div>
        {arrivals}
      </div>
    )
  }
}

export default Arrivals;


