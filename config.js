const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  // TfL no longer needs an app_id; the key alone identifies the app.
  TFL_APP_KEY: process.env.TFL_APP_KEY,
  TFL_BASE_URL: process.env.TFL_BASE_URL || 'https://api.tfl.gov.uk'
}
