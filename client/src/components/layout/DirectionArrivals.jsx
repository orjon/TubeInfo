import DirectionArrival from './DirectionArrival'

const DirectionArrivals = ({ direction, platform, arrivals }) => (
  <>
    <div className='row titleRow'>
      <div className='sub-title'>{direction}</div>
      <div className='sub-title end'>Platform {platform}</div>
    </div>
    <div className='row infoRow'>
      <h4 className='infoLabel'>Towards</h4>
      <h4 className='infoLabel end'>expected</h4>
    </div>
    {arrivals.map((arrival, i) => (
      <DirectionArrival key={`${arrival.expected}-${i}`} arrival={arrival} />
    ))}
  </>
)

export default DirectionArrivals
