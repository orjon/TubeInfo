import React, { Component } from 'react';
import './LineStatus.scss';

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
      <div className='LineStatus' onClick={this.props.handleClick}>
        <div className='Card'>
          <div className={`row lineColor ${line.id}`}></div>
          <div className='row'>
            <div className='title'>{line.name}</div>
            <div className='status'>{line.status}</div>
          </div>
          <div className='row'>
            <div className='data'>
              {disruptionReason}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LineStatus;