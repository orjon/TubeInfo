import DirectionArrival from './DirectionArrival'
import FavouriteStar from './FavouriteStar'

// `favourite` ({ stationId, lineId, direction }) and `label` are optional; with them the
// direction gets a star after it. `heading` replaces the direction as the title (the
// favourites page uses "Station, Direction"); `emptyText` is shown when no trains are due.
const DirectionArrivals = ({
  direction,
  platform,
  arrivals,
  favourite,
  label,
  heading,
  emptyText = 'No trains due'
}) => (
  <>
    <div className='row titleRow'>
      <div className='sub-title'>
        {heading ?? (direction || 'Other trains')}
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
