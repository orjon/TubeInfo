// Turns a TfL arrivals response into the shape the client uses, soonest first.

const cleanPlace = (name) =>
  (name ?? '')
    .replace(/\s+(Underground|Rail|DLR) Station\s*$/, '')
    .replace(/\s+Tram Stop\s*$/, '')
    .trim()

// Tube arrivals say platformName 'Eastbound - Platform 5'. Elizabeth line and other
// rail ones say 'A', 'B', 'Platform 12' or 'Platform Unknown', and give a direction
// of 'inbound' or 'outbound' instead.
function parseArrival(arrival) {
  const name = arrival.platformName ?? ''
  let direction = ''
  let platform = ''

  const withCompass = /^(.+?) - Platform (.+)$/.exec(name)
  if (withCompass) {
    direction = withCompass[1]
    platform = withCompass[2]
  } else {
    direction = { inbound: 'Inbound', outbound: 'Outbound' }[arrival.direction] ?? ''
    platform = name.replace(/^Platform /, '')
    if (/unknown/i.test(platform)) platform = ''
  }

  const destination = cleanPlace(arrival.destinationName)
  return {
    lineName: arrival.lineName,
    lineId: arrival.lineId,
    platform,
    destination,
    towards: arrival.towards || destination,
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
