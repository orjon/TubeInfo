function logApiStationsRequest(){
  stats.apiStationsRequests++
  tallyRequests()
  showApiStats()
}
function logApiStatusesRequest(){
  stats.apiStatusesRequests++
  tallyRequests()
  showApiStats()
}
function logApiArrivalsRequest(){
  stats.apiArrivalsRequests++
  tallyRequests()
  showApiStats()
}
function logTflStationsRequest(){
  stats.tflStationsRequests++
  tallyRequests()
  showTflStats()
}
function logTflStatusesRequest(){
  stats.tflStatusesRequests++
  tallyRequests()
  showTflStats()

}
function logTflArrivalsRequest(){
  stats.tflArrivalsRequests++
  tallyRequests()
  showTflStats()

}

function tallyRequests(){
  stats.apiRequests = (stats.apiStationsRequests + stats.apiStatusesRequests + stats.apiArrivalsRequests) 
  stats.tflRequests = (stats.tflStationsRequests +stats.tflStatusesRequests + stats.tflArrivalsRequests) 
}

function showApiStats(){
  console.log('API requests:',stats.apiRequests,'['+stats.apiStationsRequests+'/'+stats.apiStatusesRequests+'/'+stats.apiArrivalsRequests+']')
}

function showTflStats(){
  console.log('TFL requests:',stats.tflRequests,'['+stats.tflStationsRequests+'/'+stats.tflStatusesRequests+'/'+stats.tflArrivalsRequests+']')
}

module.exports = {
  logApiStationsRequest,
  logApiStatusesRequest,
  logApiArrivalsRequest,
  logTflStationsRequest,
  logTflStatusesRequest,
  logTflArrivalsRequest,
  showApiStats,
  showTflStats
}

