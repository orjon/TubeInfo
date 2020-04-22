import React, { Component } from 'react';
import './LineStops.scss';

class LineStops extends Component{
  static defaultProps={
    line: {
      lineName: '',
      stops: []
    }
  }
  render(){
    console.log('IN STOPS')
    const { line } = this.props
    return(
      <div>
      <h3 className='pageHeader'>Line Stops: {line.lineName}</h3>
      <main className='LineStops'>
        {/* {line.stops.map(stop => 
          console.log(stop.stopName)
        )} */}
      </main>
    </div>
    )
  }
}

export default LineStops;