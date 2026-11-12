import Star from './Star'
import { useFavourites } from '../../favouritesStore'
import '../../scss/Favourites.scss'

// The star in front of a direction. `favourite` is { stationId, lineId, direction };
// `label` says what it is for screen readers, e.g. "Northern line Northbound".
const FavouriteStar = ({ favourite, label }) => {
  const { isFavourite, toggle } = useFavourites()
  const on = isFavourite(favourite)

  return (
    <button
      type='button'
      className={`starButton ${on ? 'on' : ''}`}
      aria-pressed={on}
      aria-label={`${on ? 'Remove from' : 'Add to'} favourites: ${label}`}
      onClick={() => toggle(favourite)}
    >
      <Star filled={on} />
    </button>
  )
}

export default FavouriteStar
