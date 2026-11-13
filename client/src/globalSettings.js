// How often the app asks the server, in seconds. The server keeps arrivals for
// ARRIVALS_CACHE_SECONDS (15, in config.js) before asking TfL, and the two add up,
// so keep this about the same. TfL's predictions change every few seconds at busy times.
export const maxStatusesAge = 30
export const maxArrivalsAge = 15

// most trains listed for one direction (and platform) of a line at a station
export const arrivalsShown = 8
