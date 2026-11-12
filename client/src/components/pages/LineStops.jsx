import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LineStop from '../layout/LineStop'
import TubeLineHeader from '../layout/TubeLineHeader'
import Status from '../layout/Status'
import TimeStamp from '../layout/TimeStamp'
import { findLine } from '../../Helpers'
import { useStatuses, useStations } from '../../hooks'
import '../../scss/Section.scss'
import '../../scss/LineStops.scss'

const LineStops = () => {
  const { id: lineId } = useParams()
  const { statuses, statusesTimeStamp } = useStatuses()
  const { stations, lineStations, stationsTimeStamp } = useStations()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [lineId])

  const line = findLine(statuses, lineId)
  const lineStops = lineStations.find((l) => l.id === lineId)?.stations

  if (!line || !lineStops) {
    return (
      <section>
        <div className='card'>
          <div className='cardBody'>Line not found.</div>
        </div>
      </section>
    )
  }

  return (
    <section>
      <div className='card'>
        <TubeLineHeader line={line} />
        <div className='cardBody'>
          <Status line={line} timeStamp={statusesTimeStamp} />

          <div className='row titleRow'>
            <div className='status'>{lineStops.length} stations served: </div>
          </div>

          <div className='lineStopGrid '>
            {lineStops.map((stop) => {
              const station = stations.find((s) => s.id === stop.id)
              return (
                station && (
                  <LineStop
                    key={station.id}
                    station={station}
                    statuses={statuses}
                  />
                )
              )
            })}
          </div>

          <div className='row age end'>
            <TimeStamp timeStamp={stationsTimeStamp} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LineStops
