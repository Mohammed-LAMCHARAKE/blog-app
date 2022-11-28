module.exports = function objectID(req, res, next) {
  const id = req.params.id || req.body.id
  if (id && !require('mongoose').Types.ObjectId.isValid(id))
    return res.status(400).send('Invalid Resource ID !')
  next()
}
