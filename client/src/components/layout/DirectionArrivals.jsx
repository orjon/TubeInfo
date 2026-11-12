import DirectionArrival from './DirectionArrival'
import FavouriteStar from './FavouriteStar'

// `favourite` ({ stationId, lineId, direction }) and `label` are optional; with them the
// direction gets a star after it. `emptyText` is shown when there are no trains to list.
const DirectionArrivals = ({
  direction,
  platform,
  arrivals,
  favourite,
  label,
  emptyText = 'No trains due'
}) => (
  <>
    <div className='row titleRow'>
      <div className='sub-title'>
        {direction || 'Other trains'}
        {favourite && direction && <FavouriteStar favourite={favourite} label={label} />}
      </div>
      <div className='sub-title end'>{platform ? `Platform ${platform}` : ''}</div>
    </div>
    <div className='row infoRow'>
      <h4 className='infoLabel'>Towards</h4>
      <h4 className='infoLabel end'>expected</h4>
    </div>
    {arrivals.length === 0 ? (
      <div className='row data'>
        <div>{emptyText}</div>
      </div>
    ) : (
      arrivals.map((arrival, i) => (
        <DirectionArrival key={`${arrival.expected}-${i}`} arrival={arrival} />
      ))
    )}
  </>
)

export default DirectionArrivals
