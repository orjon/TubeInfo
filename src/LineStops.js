import React, { Component } from 'react';
import './Sections.scss';
import './LineStops.scss';
import LineStop from './LineStop';

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
    if (this.props.line.stops.length === 0) {
      this.props.getStops(this.props.line.id)
    }
  }



  render(){
    console.log('IN STOPS')
    const { line, lineIndex } = this.props

    let lineStops = this.state.tubeLines[lineIndex].stops.map(stop => 
      <LineStop stop={stop} />
    )
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
        <h3 className='sectionHeader'>Underground Line Stations</h3>
        <main className='LineStops'>
          <div className={`card line ${line.id}`}>
            <div className='details'>
              <div className={`row lineColor ${line.lineName}`}></div>
              <div className='row lineName'>
                <h3 className='name'>{line.lineName}</h3>
                <p className='status'>Stations: {line.stops.length}</p>
              </div>
              <div className='row'>
                <div className='data'>
                  {lineStops}
                </div>
              </div>
            </div>
          </div>
          
        </main>
      </section>
    )
  }
}

export default LineStops;

{/* <LineStops
allLines={this.state.tubeLines}
line={this.findLine(routeProps.match.params.id)}
lineIndex={this.findLineIndex(routeProps.match.params.id)}
getStops={this.getStops}
/> */}