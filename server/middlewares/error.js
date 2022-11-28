const fs = require('fs/promises')

module.exports = async function error(err, req, res, next) {
  logger.error(err.message, err) // winston global logger instance
  res.status(500).send(err.message)
  req.file && (await fs.rm(req.file.path)) // remove the uploaded file if exists in case of 500 error
}
