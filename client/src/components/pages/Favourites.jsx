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

// One station on a line: its name, then each starred direction there with its trains
const FavouriteStation = ({ stationId, station, line, directions }) => {
  const { arrivals, isError } = useArrivals(station?.id)

  return (
    <>
      {/* same style, and so the same size, as the line's status ("Good Service") */}
      <div className='row titleRow status'>
        {station ? (
          <Link className='stationLink' to={`/station/${station.url}`}>
            {station.name}
          </Link>
        ) : (
          'Station no longer available'
        )}
      </div>

      {directions.map((direction) => {
        const favourite = { stationId, lineId: line.id, direction }
        const label = station
          ? `${station.name}, ${line.name}, ${direction}`
          : `${line.name}, ${direction}: station no longer available`

        if (!station) {
          return (
            <DirectionArrivals
              key={direction}
              direction={direction}
              arrivals={[]}
              emptyText='Tap the star to remove it'
              favourite={favourite}
              label={label}
            />
          )
        }
        if (!arrivals) {
          return (
            <DirectionArrivals
              key={direction}
              direction={direction}
              arrivals={[]}
              emptyText={isError ? 'Could not load arrival times' : 'Loading arrival times...'}
              favourite={favourite}
              label={label}
            />
          )
        }

        const groups = groupArrivals(arrivals, line.id).filter((g) => g.direction === direction)
        return groups.length === 0 ? (
          <DirectionArrivals
            key={direction}
            direction={direction}
            arrivals={[]}
            favourite={favourite}
            label={label}
          />
        ) : (
          groups.map((group) => (
            <DirectionArrivals
              key={`${direction}-${group.platform}`}
              {...group}
              favourite={favourite}
              label={label}
            />
          ))
        )
      })}
    </>
  )
}

// One line: its coloured header and status, then its stations
const FavouriteLine = ({ line, stations: lineStations, allStations, statusesTimeStamp }) => (
  <div className='LineArrivals'>
    <Link to={`/line/${line.id}`}>
      <div className='LineArrivalHeader'>
        <TubeLineHeader line={line} />
      </div>
      <Status line={line} timeStamp={statusesTimeStamp} />
    </Link>
    <div className='dataBlock'>
      {lineStations.map(({ stationId, directions }) => (
        <FavouriteStation
          key={stationId}
          stationId={stationId}
          station={allStations.find((s) => s.id === stationId)}
          line={line}
          directions={directions}
        />
      ))}
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
    .map((line) => ({ line, stations: groups.find((g) => g.lineId === line.id)?.stations }))
    .filter((entry) => entry.stations)

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
            {lines.map(({ line, stations: lineStations }) => (
              <FavouriteLine
                key={line.id}
                line={line}
                stations={lineStations}
                allStations={stations}
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
