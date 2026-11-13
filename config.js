const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  // TfL no longer needs an app_id; the key alone identifies the app.
  TFL_APP_KEY: process.env.TFL_APP_KEY,
  TFL_BASE_URL: process.env.TFL_BASE_URL || 'https://api.tfl.gov.uk',
  // How long the server keeps a station's arrivals before asking TfL again. At busy times
  // TfL's predictions change every 4 to 12 seconds per train (measured at rush hour), but
  // each is already over a minute old when published and the page shows whole minutes,
  // so a few seconds either way barely shows. 15 is a balance; lower costs more requests.
  ARRIVALS_CACHE_SECONDS: Number(process.env.ARRIVALS_CACHE_SECONDS) || 15
}
