import React, { Fragment } from 'react';


const TubeLineHeader  = ({lineId, lineName}) => {

  const lightColors = ['hammersmith-city','waterloo-city', 'circle']
  let lightColor = ''

  if (lightColors.includes(lineId)){
    lightColor = 'lightColor'
  }

  return(
    <Fragment>
      <div className={`row lineColor ${lineId}`}>
        <div className={`${lightColor}`}>{lineName}</div>
      </div>
    </Fragment>
  ) 
}

export default TubeLineHeader ;

