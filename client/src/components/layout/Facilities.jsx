import '../../scss/Facilities.scss'

const Facilities = ({ facilities }) => (
  <div className='Facilities dataBlock'>
    {facilities.map((facility) => (
      <div key={facility.key} className='w25 column'>
        <div className='data'>{facility.key}</div>
      </div>
    ))}
  </div>
)

export default Facilities
