const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  TFL_API_ID: process.env.TFL_API_ID,
  TFL_APP_KEY: process.env.TFL_APP_KEY,
};
