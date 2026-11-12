import DirectionArrival from './DirectionArrival'
import FavouriteStar from './FavouriteStar'

// `favourite` ({ stationId, lineId, direction }) and `label` are optional; with them the
// direction gets a star in front of it.
const DirectionArrivals = ({ direction, platform, arrivals, favourite, label }) => (
  <>
    <div className='row titleRow'>
      <div className='sub-title'>
        {favourite && direction && <FavouriteStar favourite={favourite} label={label} />}
        {direction || 'Other trains'}
      </div>
      <div className='sub-title end'>{platform ? `Platform ${platform}` : ''}</div>
    </div>
    <div className='row infoRow'>
      <h4 className='infoLabel'>Towards</h4>
      <h4 className='infoLabel end'>expected</h4>
    </div>
    {arrivals.length === 0 ? (
      <div className='row data'>
        <div>No trains due</div>
      </div>
    ) : (
      arrivals.map((arrival, i) => (
        <DirectionArrival key={`${arrival.expected}-${i}`} arrival={arrival} />
      ))
    )}
  </>
)

export default DirectionArrivals
