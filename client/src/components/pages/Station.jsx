import { lazy, Suspense, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { findLine } from '../../Helpers'
import { useStatuses, useStations, useArrivals } from '../../hooks'
import Facilities from '../layout/Facilities'
import LineArrivals from '../layout/LineArrivals'
import '../../scss/Section.scss'
import '../../scss/Station.scss'

// Mapbox is large, so it is only loaded when a station page is opened
const Map = lazy(() => import('../layout/Map'))

const Station = () => {
  const { url } = useParams()
  const { statuses, statusesTimeStamp } = useStatuses()
  const { stations } = useStations()

  const station = stations.find((s) => s.url === url)
  const { arrivals, isError } = useArrivals(station?.id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [url])

  if (!station) {
    return (
      <section className='station'>
        <div className='card'>
          <div className='row cardTitle'>
            <h1>Station not found</h1>
          </div>
        </div>
      </section>
    )
  }

  let address = ''
  let phoneNo = ''
  let zone = ''

  // Harrow on the Hill has bad contact data from TfL
  if (station.id === '940GZZLUHOH') {
    address = [
      'Harrow on the Hill Station',
      'London Underground Ltd',
      'Station Rd',
      'Harrow HA1 1BB'
    ]
    phoneNo = '0800 022 3720'
  } else {
    if (station.contact[0]) address = station.contact[0].value.split(',')
    if (station.contact[1]) phoneNo = station.contact[1].value
    if (station.contact[2]) zone = station.contact[2].value
  }

  return (
    <section className='station'>
      <div className='card'>
        <div className='row cardTitle'>
          <h1>{station.name}</h1>
          {zone && <h1 className='end'>Zone {zone}</h1>}
        </div>

        <div className='ArrivalsGrid'>
          {station.lines.map((lineId) => {
            const line = findLine(statuses, lineId)
            return (
              line && (
                <LineArrivals
                  key={lineId}
                  line={line}
                  stationArrivals={arrivals}
                  isError={isError}
                  statusesTimeStamp={statusesTimeStamp}
                />
              )
            )
          })}
        </div>

        <div className='row mapBlock'>
          <div className='column w100'>
            <Suspense fallback={<div className='row map' />}>
              <Map key={station.id} lat={station.lat} lng={station.lng} />
            </Suspense>
          </div>
        </div>

        <div className='row titleRow'>
          <div className='column w50'>
            <div className='title'>Address</div>
            <div className='column dataBlock'>
              <div className='data'>
                {Array.isArray(address)
                  ? address.map((part) => <div key={part}>{part}</div>)
                  : address}
              </div>
            </div>
          </div>
          <div className='column w50'>
            <div className='title'>Telephone</div>
            <div className='column dataBlock'>
              <div className='data'>{phoneNo}</div>
            </div>
          </div>
        </div>

        <div className='row facilities'>
          <div className='column w100'>
            <div className='title'>Facilities</div>
            <Facilities facilities={station.facilities} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Station
