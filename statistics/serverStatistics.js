const stats = {
  serverStart: 0,
  appRequests: 0,
  appStationsRequests: 0,
  appStatusesRequests: 0,
  appArrivalsRequests: 0,
  tflRequests: 0,
  tflStationsRequests: 0,
  tflStatusesRequests: 0,
  tflArrivalsRequests: 0
}

function logAppStationsRequest() {
  stats.appStationsRequests++
  tallyRequests()
  showAppStats()
}
function logAppStatusesRequest() {
  stats.appStatusesRequests++
  tallyRequests()
  showAppStats()
}
function logAppArrivalsRequest() {
  stats.appArrivalsRequests++
  tallyRequests()
  showAppStats()
}
function logTflStationsRequest() {
  stats.tflStationsRequests++
  tallyRequests()
  showTflStats()
}
function logTflStatusesRequest() {
  stats.tflStatusesRequests++
  tallyRequests()
  showTflStats()
}
function logTflArrivalsRequest() {
  stats.tflArrivalsRequests++
  tallyRequests()
  showTflStats()
}

function tallyRequests() {
  stats.appRequests =
    stats.appStationsRequests +
    stats.appStatusesRequests +
    stats.appArrivalsRequests
  stats.tflRequests =
    stats.tflStationsRequests +
    stats.tflStatusesRequests +
    stats.tflArrivalsRequests
}

function showAppStats() {
  console.log(
    `APP requests: ${stats.appRequests} [ Stations: ${stats.appStationsRequests} | Statuses: ${stats.appStatusesRequests} | Arrivals: ${stats.appArrivalsRequests} ]`
  )
}

function showTflStats() {
  console.log(
    `TFL requests: ${stats.tflRequests} [ Stations: ${stats.tflStationsRequests} | Statuses: ${stats.tflStatusesRequests} | Arrivals: ${stats.tflArrivalsRequests} ]`
  )
}

module.exports = {
  stats,
  logAppStationsRequest,
  logAppStatusesRequest,
  logAppArrivalsRequest,
  logTflStationsRequest,
  logTflStatusesRequest,
  logTflArrivalsRequest,
  showAppStats,
  showTflStats
}
