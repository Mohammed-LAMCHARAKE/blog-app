const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function auth(req, res, next) {
  try {
    if (!req.header('x-auth-token'))
      return res.status(401).send('Acccess denied ! No token provided')

    let payload = jwt.verify(req.header('x-auth-token'), config.JWT_PRIVATE_KEY)

    req.user = payload
    next()
  } catch (ex) {
    res.status(400).send('Invalid token')
  }
}
