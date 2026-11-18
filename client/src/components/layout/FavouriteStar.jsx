import Star from './Star'
import { nextColour } from '../../favourites'
import { useFavourites } from '../../favouritesStore'
import '../../scss/Favourites.scss'

// What a tap does. On a station page the star cycles through the colours; on the
// favourites page it just removes the favourite.
const describeCycle = (colour, label) => {
  if (colour === null) return `Add to favourites: ${label}`
  const next = nextColour(colour)
  const then = next ? `tap for ${next}` : 'tap to remove'
  return `Favourite, ${colour}, ${then}: ${label}`
}

const describeRemove = (label) => `Remove from favourites: ${label}`

// The star in front of a direction. `favourite` is { stationId, lineId, direction };
// `label` says what it is for screen readers, e.g. "Northern line Northbound".
const FavouriteStar = ({ favourite, label, onTap = 'cycle' }) => {
  const { colourOf, cycle, remove } = useFavourites()
  const colour = colourOf(favourite)
  const removes = onTap === 'remove'

  return (
    <button
      type='button'
      className={`starButton ${colour ?? ''}`}
      aria-pressed={colour !== null}
      aria-label={removes ? describeRemove(label) : describeCycle(colour, label)}
      onClick={() => (removes ? remove(favourite) : cycle(favourite))}
    >
      <Star filled={colour !== null} />
    </button>
  )
}

export default FavouriteStar
