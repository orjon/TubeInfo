import React, { Component } from 'react';
import LineStatus from './LineStatus';
import axios from 'axios';
import './LineStatuses.scss';

class LineStatuses extends Component {
  constructor(props){
    super(props);
    this.state={
      modes: [],
      tube: []
    }
  }

  componentDidMount(){
    this.getStatuses()
  }

  async getStatuses(){
    let lines = []

    let responseTubeStatuses = await axios.get('https://api.tfl.gov.uk/line/mode/tube/status', {
      headers : {Accept: 'application/json'}
    })
    let response = responseTubeStatuses.data.sort()
    response.map(line => {
      lines.push({
        key: line.id,
        id: line.id,
        lineName: line.name,
        status: line.lineStatuses[0].statusSeverityDescription,
        reason: line.lineStatuses[0].reason
      })
    })
    this.setState({tube: lines})
    // , color: `${Colors.line.id}`
  }

  render(){
    const { tube } = this.state
    const tubeStatuses = tube.map( tubeLine => (
      <LineStatus key={tubeLine.id} line={tubeLine}/>
    ))
    return(
      <div>
        <h3 className='pageHeader'>Line Statuses</h3>
        <main className='LineStatuses'>
          {tubeStatuses}
        </main>
      </div>

    )
  }
}

export default LineStatuses;

// function getLines() {
//   $lines.empty()
//   console.log('Getting Line information')
//   $.ajax({
//     method: 'GET',
//     url: 'https://api.tfl.gov.uk/line/mode/tube/status'
//   })
//     .then(response => {
//       lines = response
//       lines.sort()
//       console.log(lines)
//       displayLines()
//     })
// }



    // try {
    //   let newJokes = []
    //   while (newJokes.length < this.props.numJokesToGet) {
    //     let response = await axios.get('https://api.tfl.gov.uk/line/mode/tube/status', {
    //       headers : {Accept: 'application/json'}
    //     })
    //     let newJoke = response.data.joke;
    //     if (!this.seenJokes.has(newJoke)) {
    //       // Checks to see if joke is in set of existing jokes.
    //       newJokes.push({joke: newJoke, votes: 0, id:uuid()})
    //     } else {
    //       console.log('found duplicate:')
    //       console.log(newJoke)
    //     }
    //   } 
    // } catch(error) {
    //   alert(error)
    //   this.setState({loading:false})
    // }
  