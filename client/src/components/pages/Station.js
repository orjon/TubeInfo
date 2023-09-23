import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid'
import {
  getStatuses,
  setStatusesExpired,
  getStations,
  getStationArrivals
} from '../../actions/tube'
import { maxStatusesAge, maxArrivalsAge } from '../../globalSettings'
import Map from '../layout/Map'
import Facilities from '../layout/Facilties'
import LineArrivals from '../layout/LineArrivals'
import '../../scss/Section.scss'
import '../../scss/Station.scss'

const Station = ({
  getStatuses,
  setStatusesExpired,
  getStations,
  getStationArrivals,
  tube: {
    statuses,
    statusesTimeStamp,
    statusesExpired,
    stations,
    stationsExpired
  },
  ...props
}) => {
  const stationIndex = stations.findIndex(
    (station) => props.match.params.url === station.url
  )
  const station = stations[stationIndex]
  const stationId = station.id
  let address = ''
  let phoneNo = ''
  let zone = ''
  // let location = ''
  let lineArrivals = ''

  const findLine = (idToFind) => {
    return statuses.find(function (line) {
      return line.id === idToFind
    })
  }

  const formatAddress = (address) => {
    address = address.split(',')
    address = address.map((lineOfAddress) => (
      <div key={uuid()}>{lineOfAddress}</div>
    ))
    return address
  }

  // const formatLocation = (lat, lng) =>{
  //   lat = lat + '°N'
  //   if (lng >= 0) {
  //     lng = lng + '°E'
  //   } else{
  //     lng = - lng + '°W'
  //   }
  //   return {lat: lat, lng: lng}
  // }

  // Statuses update interval
  useEffect(() => {
    window.scrollTo(0, 0)
    const intervalStatuses = setInterval(() => {
      setStatusesExpired()
    }, maxStatusesAge * 1000)
    const intervalArrivals = setInterval(() => {
      getStationArrivals(stationId)
    }, maxArrivalsAge * 1000)
    return () => {
      clearTimeout(intervalStatuses)
      clearTimeout(intervalArrivals)
    }
  }, [setStatusesExpired, getStationArrivals, stationId])

  // Load lines statuses for name reference if not received already
  useEffect(() => {
    if (statuses.length === 0 || statusesExpired) getStatuses()
  }, [statuses, getStatuses, statusesExpired])

  //Get stations for all lines
  useEffect(() => {
    if (stationsExpired && !statusesExpired) getStations()
  }, [statuses, stationsExpired, statusesExpired, getStations])

  //Get arrivals
  useEffect(() => {
    if (!stationsExpired && !statusesExpired && station) {
      getStationArrivals(stationId)
    }
  }, [stationsExpired, statusesExpired, station, stationId, getStationArrivals])

  // useEffect(() => {
  //   if (!statusesExpired && station) {
  //     getStationArrivals({calledFrom, stationId})
  //   }
  // },[statusesExpired, station, stationId, getStationArrivals])

  if (station) {
    // Harrow on the Hill error fix - but not working!
    if (station.id === '940GZZLUHOH') {
      address =
        'Harrow on the Hill Station, London Underground Ltd, Station Rd, Harrow HA1 1BB'
      phoneNo = '0800 022 3720'
    } else {
      if (station.contact[0]) address = formatAddress(station.contact[0].value)
      if (station.contact[1]) phoneNo = station.contact[1].value
      if (station.contact[2]) zone = station.contact[2].value
    }

    // location = formatLocation(station.lat, station.lng)

    if (station.arrivals) {
      // Loops through each line served by station
      lineArrivals = station.lines.map((line) => (
        <LineArrivals
          key={line}
          line={findLine(line)}
          stationArrivals={station.arrivals}
          statusesTimeStamp={statusesTimeStamp}
        />
      ))
    } else {
      lineArrivals = station.lines.map((line) => (
        <LineArrivals
          key={line}
          line={findLine(line)}
          stationArrivals={[]}
          statusesTimeStamp={statusesTimeStamp}
        />
      ))
    }
  }

  return (
    <section>
      <div className='card'>
        <div className='row cardTitle'>
          {station ? (
            <Fragment>
              <h1>{station.name}</h1>
              {zone ? (
                <h1 className='end'>Zone {station.contact[2].value}</h1>
              ) : (
                ''
              )}
              {/* <h1>{station.name} [{stationIndex}]{station.id}</h1>{zone? <h1 className='end'>Zone {station.contact[2].value}</h1> : ''} */}
            </Fragment>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>

        {station ? (
          <Fragment>
            <div className='ArrivalsGrid'>{lineArrivals}</div>

            {/* <div className='row horizontalLine w100'/> */}

            <div className='row mapBlock'>
              <div className='column w100'>
                <Map lat={station.lat} lng={station.lng} />
                {/* <div className='row'>
                    <div className='mapLabel'>{location.lat} {location.lng}</div>
                    <div className='mapLabel end'>Station ID: {station.id}</div>
                  </div> */}
              </div>
            </div>

            <div className='row titleRow'>
              <div className='column w50'>
                <div className='title'>Address</div>
                <div className='column dataBlock'>
                  <div className='data'>{address}</div>
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
          </Fragment>
        ) : (
          ''
        )}
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    tube: state.tube
  }
}

export default connect(mapStateToProps, {
  getStatuses,
  setStatusesExpired,
  getStations,
  getStationArrivals
})(Station)
