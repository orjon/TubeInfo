import React, { Component } from 'react';
import './Sections.scss';
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
      tubeLines: this.props.allLines
    }
  }

  componentDidMount(){
    if (this.props.thisLine.stops.length === 0) {
      this.props.getStops(this.props.thisLine.id)
    }
  }



  render(){
    console.log('IN STOPS')
    const { thisLine, thisLineIndex } = this.props
    // if (this.props.tubeLines.length === 0){
    //   this.props.getStatuses()
    // }xs

    // if (this.props.tubeLines[lineIndex].stops.length === 0){
    //   this.props.getStatuses()
    // }


    // lineStops = this.props.getStops(line.id)
    // console.log('This line stops are: ', lineStops)
    return(
      <section>
        <h3 className='sectionHeader'>Line Stops: {thisLine.lineName}</h3>
        <main className='LineStops'>
          {this.state.tubeLines[thisLineIndex].stops.map(stop => 
            <p key={stop.id}>{stop.stopName}</p>
          )}
        </main>
      </section>
    )
  }
}

export default LineStops;