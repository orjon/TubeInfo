import { appName } from '../../config'

const Footer = () => (
  <footer>
    <div className='legal'>
      <div>Powered by TfL Open Data</div>
      <div>
        Contains OS data © Crown copyright and database rights 2016 and Geomni
        UK Map data © and database rights [2019]
      </div>
      <div>{appName} is not affiliated with Transport for London.</div>
    </div>
    <div className='developer end'>
      <a href='https://www.orjon.com'>orjon.com</a>
    </div>
  </footer>
)

export default Footer
