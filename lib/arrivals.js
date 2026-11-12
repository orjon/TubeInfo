// Turns a TfL arrivals response into the shape the client uses, soonest first.

// platformName looks like 'Eastbound - Platform 5'
function parseArrival(arrival) {
  let direction = ''
  let platform = ''
  if (arrival.platformName) {
    direction = arrival.platformName.substring(
      0,
      arrival.platformName.indexOf(' - ')
    )
    platform = arrival.platformName.substring(
      arrival.platformName.indexOf('Platform ') + 9
    )
  }
  return {
    lineName: arrival.lineName,
    lineId: arrival.lineId,
    platform,
    destination: arrival.destination,
    towards: arrival.towards,
    expected: arrival.expectedArrival,
    direction
  }
}

function parseArrivals(tflArrivals) {
  return tflArrivals
    .map(parseArrival)
    .sort((a, b) => new Date(a.expected) - new Date(b.expected))
}

module.exports = { parseArrival, parseArrivals }
