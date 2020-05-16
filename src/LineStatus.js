import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_Card.scss';

class LineStatus extends Component {
  render(){
    const { line } = this.props
    let disruptionReason = ''
      if (line.reason) {
        disruptionReason = line.reason
        var cropIndex = disruptionReason.indexOf(':') + 1
        disruptionReason = disruptionReason.substring(cropIndex)
      }
    return(
      <div className='LineStatus'>
        <Link to={`/line/${line.id}`}>
          <div className='Card'>
          <div className={`row lineColor ${line.id}`}>
              <h2>{line.name}</h2>
            </div>
            
            <div className='row titleRow'>
              {/* <h1>{line.name}</h1> */}
              <div className='status'>{line.status}</div>
            </div>

            <div className='row'>
              <div className='data'>
                {disruptionReason}
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default LineStatus;