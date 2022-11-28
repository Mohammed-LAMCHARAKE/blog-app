const app = require('express')()

// handling and logging errors
require('./main/logging')()

// checking for essential configuration settings
require('./main/configs')()

// registring routes
require('./main/routes')(app)

// connect to MongoDB
require('./main/db')()

// Initializing connection to redis
require('./main/redis')()

app.listen(process.env.PORT || 4000)
