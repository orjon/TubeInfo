import React, { Component } from 'react'

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

    let arrivals = arrivals1.map(arrival => 
      <div className='row'>
        <div className='column'>{arrival.towards}</div>
        <div className='column end'>{arrival.expected}</div>
      </div>
    )

    return(
      <div>
        <div key={line} className={`row lineColor ${line}`}>{line.name}</div>
        {arrivals}
      </div>
    )
  }
}

export default Arrivals;


