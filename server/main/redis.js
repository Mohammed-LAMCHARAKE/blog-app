const redis = require('redis')

module.exports = async function connectToRedis() {
  try {
    const client = redis.createClient()
    await client.connect()
    global.Redis = client // making redis available everywhere
    console.log('Connected to Redis ...')
  } catch (ex) {
    logger.error('Error connecting to Redis ...', ex)
    process.exit(1)
  }
}
