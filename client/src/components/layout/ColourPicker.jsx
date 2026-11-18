import Star from './Star'
import { COLOURS } from '../../favourites'
import '../../scss/Favourites.scss'

// The four coloured stars beside the Favourites title. The selected one is circled.
const ColourPicker = ({ selected, onSelect }) => (
  <div className='colourPicker' role='group' aria-label='Which favourites to show'>
    {COLOURS.map((colour) => (
      <button
        key={colour}
        type='button'
        className={`colourButton ${colour} ${colour === selected ? 'selected' : ''}`}
        aria-pressed={colour === selected}
        aria-label={`${colour} favourites`}
        onClick={() => onSelect(colour)}
      >
        <Star />
      </button>
    ))}
  </div>
)

export default ColourPicker
