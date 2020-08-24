import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LineStatus from './LineStatus';
import '../scss/Section.scss';


const LineStatuses = () => {

  const apiString = `app_id=${process.env.REACT_APP_TFL_API_ID}&app_key=${process.env.REACT_APP_TFL_APP_KEY}`
  const [lineStatuses, setStatuses] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`https://api.tfl.gov.uk/line/mode/tube/status?${apiString}`, {headers : {Accept: 'application/json'}})
      .then(response => {
        let statuses = []
        response.data.map(line => 
          statuses.push({
            key: line.id,
            id: line.id,
            name: line.name,
            status: line.lineStatuses[0].statusSeverityDescription,
            reason: line.lineStatuses[0].reason,
            stopOrder: []
          })
        )
        const statusJSX = statuses.map( line => (
          <LineStatus key={line.id} line={line}/>
        ))
        setStatuses(statusJSX)
      })
      .catch(err => {
        console.log(err)
      })
  },[])
  

  return(
    <section>
      <div className='sectionBody CardGrid'>
        {(lineStatuses.length !== 0)? lineStatuses : 'Loading...'}
      </div>
    </section>
  )
}

export default LineStatuses;

  // getStatuses(){
  //   let lines = []
  //   let response = await axios.get(`https://api.tfl.gov.uk/line/mode/tube/status?${apiString}`, {
  //     headers : {Accept: 'application/json'}
  //   })
  //   let linesInfo = response.data
  //   linesInfo.map(line => 
  //     lines.push({
  //       key: line.id,
  //       id: line.id,
  //       name: line.name,
  //       status: line.lineStatuses[0].statusSeverityDescription,
  //       reason: line.lineStatuses[0].reason,
  //       stopOrder: []
  //     })
  //   )
  //   return lines
  // }

  // render(){
  //   const { tubeLines } = this.state
  //   const tubeStatuses = tubeLines.map( line => (
  //     <LineStatus key={line.id} line={line}/>
  //   ))

  // }



