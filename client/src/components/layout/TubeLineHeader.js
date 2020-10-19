import React, { Fragment } from 'react';


const TubeLineHeader  = ({line}) => {

  const lightColors = ['hammersmith-city','waterloo-city', 'circle']
  let lightColor = ''


  if (lightColors.includes(line.id)){
    lightColor = 'lightColor'
  }

  return(
    <Fragment>
      <div className={`row lineColor ${line.id}`}>
        <div className={`${lightColor}`}>{line.name}</div>
      </div>
    </Fragment>
  ) 
}

export default TubeLineHeader ;

