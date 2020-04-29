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
        <div className={`card line ${line.id}`}>
          <div className='details'>
            <div className={`row lineColor ${line.name}`}></div>
            <div className='row lineName'>
              <h3 className='name'>{line.name}</h3>
              <p className='status'>{line.status}</p>
            </div>
            <div className='row'>
              <div className='data'>
                <p>{disruptionReason}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LineStatus;