const express = require('express')

module.exports = function routes(app) {
  app.use(express.json())
  app.use(express.static(__dirname.replace('main', '') + 'public'))
  app.use(require('helmet')())
  app.use(require('cors')())
  ////////////////// MAIN ROUTES /////////////////////
  app.use('/auth', require('../routes/authentication'))
  app.use('/posts', require('../routes/posts'))
  app.use('/categories', require('../routes/categories'))
  ///////////////// ERROR HANDLING ///////////////////
  app.use(require('../middlewares/error'))
  app.use((req, res) => res.status(404).send('Not Found'))
}
