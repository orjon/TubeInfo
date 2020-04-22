import React, { Component } from 'react';
import './LineStops.scss';

class LineStops extends Component{
  static defaultProps={
    line: {
      lineName: '',
      stops: []
    }
  }

  componentDidMount(){

  }



  render(){
    console.log('IN STOPS')
    const { line } = this.props
    const lineStops = this.props.getStops(line.id)
    if (this.props.tubeLines.length === 0){
      this.props.getStatuses()
    }
    // console.log('This line stops are: ', lineStops)
    return(
      <div>
        <h3 className='pageHeader'>Line Stops: {line.lineName}</h3>
        <main className='LineStops'>
          info
          {line.stops.map(stop => 
            console.log(stop.stopName)
          )}
        </main>
      </div>
    )
  }
}

export default LineStops;