module.exports = function admin(req, res, next) {
  // req.user is set by the auth middleware
  if (req.user.isAdmin) return next()
  return res.status(401).send('Only admins can access this resource')
}
