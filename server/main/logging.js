require('express-async-errors')
const winston = require('winston')

module.exports = function logging() {
  const logger = winston.createLogger({
    level: 'info',
    // format: winston.format.prettyPrint(),
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.prettyPrint()
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({
        filename: 'errors-logs.log',
        level: 'error'
      })
    ]
  })

  process.on('uncaughtException', (ex) => {
    if (process.env.NODE_ENV == 'development' || null)
      logger.log('warn', ex.message, ex)
    else logger.error(ex.message, ex)
  })

  process.on('unhandledRejection', (ex) => {
    throw ex
  })

  global.logger = logger // making winston logger accessible globally
}
