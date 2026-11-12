const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  // TfL no longer needs an app_id; the key alone identifies the app.
  TFL_APP_KEY: process.env.TFL_APP_KEY,
  TFL_BASE_URL: process.env.TFL_BASE_URL || 'https://api.tfl.gov.uk',
  // How long the server keeps a station's arrivals before asking TfL again. TfL refreshes
  // its predictions about once a minute, so there is no point going much below 15.
  ARRIVALS_CACHE_SECONDS: Number(process.env.ARRIVALS_CACHE_SECONDS) || 15
}
