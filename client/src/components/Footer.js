import React, { Fragment } from 'react';

const Footer = () => {
  return(
    <Fragment>
      <footer>
        <div className='legal'>
          <div>Powered by TfL Open Data</div>
          <div>Contains OS data © Crown copyright and database rights 2016 and Geomni UK Map data © and database rights [2019]</div>
        </div>
        <div className='developer end'>
          <a href='http://www.orjon.com'>orjon.com</a>
        </div>
      </footer>
    </Fragment>

  )
}

export default Footer

