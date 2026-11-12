const moment = require('moment')
const { app } = require('./app')

const PORT = process.env.PORT || 5001
console.log('Server Start: ', moment(global.stats.serverStart).format('HH:mm:ss'))
app.listen(PORT, () => console.log(`SetOff server running on ${PORT}`))
