const config = require('config')

module.exports = function checkConfigSettings() {
  // if (process.env.NODE_ENV == null) throw new Error('NODE_ENV is not set')

  if (!config.has('JWT_PRIVATE_KEY')) {
    throw new Error('JWT_PRIVATE_KEY is not set as an environment variable')
  }
}
