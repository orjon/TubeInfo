import { Link } from 'react-router-dom'
import { findLine, groupArrivals } from '../../Helpers'
import { groupByStation } from '../../favourites'
import { useFavourites } from '../../favouritesStore'
import { useArrivals, useStations, useStatuses } from '../../hooks'
import DirectionArrivals from '../layout/DirectionArrivals'
import Star from '../layout/Star'
import Status from '../layout/Status'
import TubeLineHeader from '../layout/TubeLineHeader'
import '../../scss/Section.scss'
import '../../scss/Station.scss'
import '../../scss/Favourites.scss'

// One starred direction: the line, its status, and that direction's trains
const FavouriteDirection = ({ station, line, direction, arrivals, isError, statusesTimeStamp }) => {
  let body
  if (arrivals) {
    const groups = groupArrivals(arrivals, line.id).filter((g) => g.direction === direction)
    body = (
      <div className='dataBlock'>
        {groups.length === 0 ? (
          <DirectionArrivals
            direction={direction}
            arrivals={[]}
            favourite={{ stationId: station.id, lineId: line.id, direction }}
            label={`${station.name}, ${line.name}, ${direction}`}
          />
        ) : (
          groups.map((group) => (
            <DirectionArrivals
              key={group.platform}
              {...group}
              favourite={{ stationId: station.id, lineId: line.id, direction }}
              label={`${station.name}, ${line.name}, ${direction}`}
            />
          ))
        )}
      </div>
    )
  } else {
    body = (
      <div className='row titleRow'>
        <div className='sub-title'>
          {isError ? 'Could not load arrival times' : 'Loading arrival times...'}
        </div>
      </div>
    )
  }

  return (
    <div className='LineArrivals'>
      <Link to={`/line/${line.id}`}>
        <div className='LineArrivalHeader'>
          <TubeLineHeader line={line} />
        </div>
        <Status line={line} timeStamp={statusesTimeStamp} />
      </Link>
      {body}
    </div>
  )
}

// One card per station, holding its starred directions
const FavouriteStation = ({ station, items, statuses, statusesTimeStamp }) => {
  const { arrivals, isError } = useArrivals(station.id)

  return (
    <div className='card'>
      <div className='row cardTitle'>
        <h1>
          <Link className='stationLink' to={`/station/${station.url}`}>
            {station.name}
          </Link>
        </h1>
      </div>
      <div className='ArrivalsGrid'>
        {items.map(({ lineId, direction }) => {
          const line = findLine(statuses, lineId)
          return (
            line && (
              <FavouriteDirection
                key={`${lineId}-${direction}`}
                station={station}
                line={line}
                direction={direction}
                arrivals={arrivals}
                isError={isError}
                statusesTimeStamp={statusesTimeStamp}
              />
            )
          )
        })}
      </div>
    </div>
  )
}

// A favourite whose station is no longer in the data: it can still be removed
const MissingStation = ({ stationId, items }) => {
  const { toggle } = useFavourites()
  return (
    <div className='card'>
      <div className='row cardTitle'>
        <h1>Station no longer available</h1>
      </div>
      <button
        type='button'
        onClick={() => items.forEach((i) => toggle({ stationId, ...i }))}
      >
        Remove from favourites
      </button>
    </div>
  )
}

const Favourites = () => {
  const { favourites } = useFavourites()
  const { stations } = useStations()
  const { statuses, statusesTimeStamp } = useStatuses()
  const groups = groupByStation(favourites)

  return (
    <section className='station favourites'>
      <h1 className='pageTitle'>Favourites</h1>

      {groups.length === 0 ? (
        <div className='card'>
          <p className='emptyFavourites'>
            No favourites yet. Open a station and tap the star <Star filled={false} /> in front
            of a direction, such as Northbound, to add it here.
          </p>
        </div>
      ) : (
        groups.map((group) => {
          const station = stations.find((s) => s.id === group.stationId)
          return station ? (
            <FavouriteStation
              key={group.stationId}
              station={station}
              items={group.items}
              statuses={statuses}
              statusesTimeStamp={statusesTimeStamp}
            />
          ) : (
            <MissingStation key={group.stationId} stationId={group.stationId} items={group.items} />
          )
        })
      )}
    </section>
  )
}

export default Favourites
