import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LineStop.scss';

class LineStop extends Component{
  static defaultProps={
    station: {
      lines: []
    }

  }

  lineName(tubeLines, line){
    let index = tubeLines.findIndex(lineX => lineX.id === line);
    return tubeLines[index].name
  }

  lineId(tubeLines, line){
    let index = tubeLines.findIndex(lineX => lineX.id === line);
    return tubeLines[index].id
  }


  render(){
    let { station, tubeLines } = this.props
    let lines = []




    
    lines = station.lines.map(line => 
      <Link key={line} to={`/line/${this.lineId(tubeLines, line)}`}>
        <div className={`lineBlock ${line}`}>
          {this.lineName(tubeLines, line)}
        </div>
      </Link>

    )
  
    return(
      <div className='row LineStop'>
        <Link to={`/station/${station.url}`}>
          {station.name}
        </Link>

        <div className='row end'>
          {lines}
        </div>
        
      </div>
    )
  }
}

export default LineStop;
