import { Link } from 'react-router-dom'
import { findLine, groupArrivals } from '../../Helpers'
import { groupByLine } from '../../favourites'
import { useFavourites } from '../../favouritesStore'
import { useArrivals, useStations, useStatuses } from '../../hooks'
import DirectionArrivals from '../layout/DirectionArrivals'
import Star from '../layout/Star'
import Status from '../layout/Status'
import TubeLineHeader from '../layout/TubeLineHeader'
import '../../scss/Section.scss'
import '../../scss/Station.scss'
import '../../scss/Favourites.scss'

// One starred direction at one station: "Bromley-by-Bow, Eastbound" and its trains
const FavouriteDirection = ({ station, line, direction }) => {
  const { arrivals, isError } = useArrivals(station.id)
  const favourite = { stationId: station.id, lineId: line.id, direction }

  const heading = (
    <>
      <Link className='stationLink' to={`/station/${station.url}`}>
        {station.name}
      </Link>
      {`, ${direction}`}
    </>
  )
  const label = `${station.name}, ${line.name}, ${direction}`

  if (!arrivals) {
    return (
      <>
        <div className='row titleRow'>
          <div className='sub-title'>{heading}</div>
        </div>
        <div className='row data'>
          <div>{isError ? 'Could not load arrival times' : 'Loading arrival times...'}</div>
        </div>
      </>
    )
  }

  const groups = groupArrivals(arrivals, line.id).filter((g) => g.direction === direction)
  if (groups.length === 0) {
    return (
      <DirectionArrivals
        heading={heading}
        direction={direction}
        arrivals={[]}
        favourite={favourite}
        label={label}
      />
    )
  }
  return groups.map((group) => (
    <DirectionArrivals
      key={group.platform}
      {...group}
      heading={heading}
      favourite={favourite}
      label={label}
    />
  ))
}

// A favourite whose station is no longer in the data. It can still be removed.
const MissingStation = ({ stationId, line, direction }) => (
  <DirectionArrivals
    heading='Station no longer available'
    direction={direction}
    arrivals={[]}
    emptyText='Tap the star to remove it'
    favourite={{ stationId, lineId: line.id, direction }}
    label={`${line.name}, ${direction}: station no longer available`}
  />
)

// One line: its coloured header, its status, then each starred direction on it
const FavouriteLine = ({ line, items, stations, statusesTimeStamp }) => (
  <div className='LineArrivals'>
    <Link to={`/line/${line.id}`}>
      <div className='LineArrivalHeader'>
        <TubeLineHeader line={line} />
      </div>
      <Status line={line} timeStamp={statusesTimeStamp} />
    </Link>
    <div className='dataBlock'>
      {items.map(({ stationId, direction }) => {
        const station = stations.find((s) => s.id === stationId)
        return station ? (
          <FavouriteDirection
            key={`${stationId}-${direction}`}
            station={station}
            line={line}
            direction={direction}
          />
        ) : (
          <MissingStation
            key={`${stationId}-${direction}`}
            stationId={stationId}
            line={line}
            direction={direction}
          />
        )
      })}
    </div>
  </div>
)

const Favourites = () => {
  const { favourites } = useFavourites()
  const { stations } = useStations()
  const { statuses, statusesTimeStamp } = useStatuses()

  // lines in the same order as the home page; a line that is no longer known is left out
  const groups = groupByLine(favourites)
  const lines = statuses
    .map((line) => ({ line, items: groups.find((g) => g.lineId === line.id)?.items }))
    .filter((entry) => entry.items)

  return (
    <section className='station favourites'>
      <div className='card'>
        <div className='row cardTitle'>
          <h1>Favourites</h1>
        </div>

        {lines.length === 0 ? (
          <p className='emptyFavourites'>
            No favourites yet. Open a station and tap the star <Star filled={false} /> after a
            direction, such as Northbound, to add it here.
          </p>
        ) : (
          <div className='ArrivalsGrid'>
            {lines.map(({ line, items }) => (
              <FavouriteLine
                key={line.id}
                line={line}
                items={items}
                stations={stations}
                statusesTimeStamp={statusesTimeStamp}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Favourites
