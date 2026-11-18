import { Link } from 'react-router-dom'
import { findLine, groupArrivals } from '../../Helpers'
import { groupByLine, withColour } from '../../favourites'
import { useFavourites } from '../../favouritesStore'
import { useSelectedColour } from '../../selectedColourStore'
import { useArrivals, useStations, useStatuses } from '../../hooks'
import ColourPicker from '../layout/ColourPicker'
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
        const label = station
          ? `${station.name}, ${line.name}, ${direction}`
          : `${line.name}, ${direction}: station no longer available`
        // on this page the star removes the favourite rather than changing its colour
        const star = { favourite: { stationId, lineId: line.id, direction }, label, starTap: 'remove' }

        if (!station) {
          return (
            <DirectionArrivals
              key={direction}
              direction={direction}
              arrivals={[]}
              emptyText='Tap the star to remove it'
              {...star}
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
              {...star}
            />
          )
        }

        const groups = groupArrivals(arrivals, line.id).filter((g) => g.direction === direction)
        return groups.length === 0 ? (
          <DirectionArrivals key={direction} direction={direction} arrivals={[]} {...star} />
        ) : (
          groups.map((group) => (
            <DirectionArrivals key={`${direction}-${group.platform}`} {...group} {...star} />
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
  const [colour, setColour] = useSelectedColour()
  const { stations } = useStations()
  const { statuses, statusesTimeStamp } = useStatuses()

  // only the selected colour, with the lines in the same order as the home page; a line
  // that is no longer known is left out
  const groups = groupByLine(withColour(favourites, colour))
  const lines = statuses
    .map((line) => ({ line, stations: groups.find((g) => g.lineId === line.id)?.stations }))
    .filter((entry) => entry.stations)

  return (
    <section className='station favourites'>
      <div className='card'>
        <div className='row cardTitle'>
          <h1>Favourites</h1>
          <ColourPicker selected={colour} onSelect={setColour} />
        </div>

        {lines.length === 0 ? (
          <p className='emptyFavourites'>
            No {colour} favourites yet. Open a station and tap the star <Star filled={false} />{' '}
            after a direction, such as Northbound, until it turns {colour}.
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
