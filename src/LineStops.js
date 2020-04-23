import React, { Component } from 'react';
import './LineStops.scss';

class LineStops extends Component{
  static defaultProps={
    line: {
      lineName: '',
      stops: []
    }
  }

  constructor(props){
    super(props);
    this.state = {
      tubeLines: this.props.tubeLines
    }
  }

  componentDidMount(){

  }



  render(){
    console.log('IN STOPS')
    const { line, lineIndex } = this.props
    console.log(line.stops.length)
    let lineStops = []
    // if (this.props.tubeLines.length === 0){
    //   this.props.getStatuses()
    // }

    // if (this.props.tubeLines[lineIndex].stops.length === 0){
    //   this.props.getStatuses()
    // }


    lineStops = this.props.getStops(line.id)
    // console.log('This line stops are: ', lineStops)
    return(
      <div>
        <h3 className='pageHeader'>Line Stops: {line.lineName}</h3>
        <main className='LineStops'>
          info
          {/* {this.state.tubeLines[lineIndex].stops.map(stop => 
            console.log(stop.stopName)
          )} */}
        </main>
      </div>
    )
  }
}

export default LineStops;