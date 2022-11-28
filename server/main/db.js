const mongoose = require('mongoose')
const config = require('config')

module.exports = async function dbConnection() {
  await mongoose.connect(config.DATABASE_URL, { keepAlive: true })

  mongoose.connection.on('error', (err) => logger.error(err))

  mongoose.connection.on('disconnected', (err) => {
    logger.error('Database disconnected')
  })

  console.log('Connected to database ...')
}
