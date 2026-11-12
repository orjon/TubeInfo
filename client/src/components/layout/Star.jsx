// A five-point star. `filled` is solid, otherwise just the outline.
const Star = ({ filled = true }) => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' aria-hidden='true' focusable='false'>
    <path
      d='M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 17.5l-5.8 3.05 1.1-6.5-4.7-4.6 6.5-.95z'
      fill={filled ? 'currentColor' : 'none'}
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinejoin='round'
    />
  </svg>
)

export default Star
