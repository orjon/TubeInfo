// Cleans up station records from the TfL StopPoint API.

function kebabCase(inputString) {
  return inputString
    .toLowerCase()
    .replace(/[()']/g, '')
    .trim()
    .replace(/ +/g, '-')
}

// "Brixton Underground Station" -> "Brixton", "Abbey Wood Rail Station" -> "Abbey Wood".
// Text in brackets is kept ("Kensington (Olympia)"); stations that need it removed
// are merged in lib/mergedStations.js.
function trimStationName(stationName) {
  return stationName
    .replace(/\s+(Underground|Rail|DLR) Station\s*$/, '')
    .replace(/\s+Tram Stop\s*$/, '')
    .trim()
}

// TfL is not consistent: "Help points" / "Help Points", "Boarding Ramps" / "Boarding Ramp"
const sameKey = (a, b) =>
  a.toLowerCase().replace(/s$/, '') === b.toLowerCase().replace(/s$/, '')

function filterStationData(station, lineId) {
  let validFacilities = []
  let rejectedValues = ['no', '0']
  let renamedFacilityKeys = ['TaxiRankOutsideStation']
  let validContacts = []
  let facility = [
    { key: 'Ticket Halls', value: undefined },
    { key: 'Toilets', value: undefined },
    { key: 'Lifts', value: undefined },
    { key: 'Escalators', value: undefined },
    { key: 'WiFi', value: undefined },
    { key: 'Help Points', value: undefined },
    { key: 'Payphones', value: undefined },
    { key: 'Boarding Ramp', value: undefined },
    { key: 'Cash Machines', value: undefined },
    { key: 'Euro Cash Machines', value: undefined },
    { key: 'Waiting Room', value: undefined },
    { key: 'TaxiRankOutsideStation', value: undefined },
    { key: 'Car park', value: undefined },
    { key: 'Left Luggage', value: undefined },
    { key: 'Photo Booths', value: undefined },
    { key: 'Amazon Lockers', value: undefined },
    { key: 'ASDA Click and Collect', value: undefined }
  ]
  let contact = [
    { key: 'Address', value: undefined },
    { key: 'PhoneNo', value: undefined },
    { key: 'Zone', value: undefined }
  ]

  contact.forEach((property) => {
    let propertyObject = station.additionalProperties.find((x) =>
      sameKey(x.key, property.key)
    )
    if (propertyObject) {
      if (!rejectedValues.includes(propertyObject.value)) {
        property.value = propertyObject.value
        validContacts.push(property)
        return
      }
    }
  })

  facility.forEach((facility) => {
    let facilityObject = station.additionalProperties.find((x) =>
      sameKey(x.key, facility.key)
    )
    if (facilityObject && renamedFacilityKeys.includes(facility.key)) {
      facility.key = 'Taxi Rank'
    }
    if (facilityObject && !rejectedValues.includes(facilityObject.value)) {
      facility.value = facilityObject.value
      validFacilities.push(facility)
      return
    }
  })

  return {
    key: station.id,
    id: station.id,
    url: kebabCase(trimStationName(station.commonName)),
    name: trimStationName(station.commonName),
    lines: [lineId],
    hub: station.hubNaptanCode || undefined,
    lat: station.lat,
    lng: station.lon,
    contact: [...validContacts],
    facilities: validFacilities
  }
}

module.exports = { kebabCase, trimStationName, filterStationData }
