const Twitter = require('twitter')
const CronJob = require('cron').CronJob

// const TwitterFeed = async () => {
//   let twitter_config = {
//     consumer_key: process.env.CONSUMER_KEY,
//     consumer_secret: process.env.CONSUMER_SECRET_KEY,
//     access_token_key: process.env.ACCESS_TOKEN,
//     access_token_secret: process.send.ACCESS_TOKEN_SECRET,
//   }
//   try {
//     let client = new Twitter(twitter_config)
//     let status = 'Hello Twitter, posting from NodeJS with my first Cronjob app!'
//     let d = await client.post('statuses/update', { status })
//     return d
//   } catch (error) {
//     console.log(`Error: ${error}`)
//     return
//   }
// }

const consoleTest = async () => {
  try {
    let now = new Date()
    let status = `Testing console.log ${now.toUTCString()}`
    console.log(status)
    return status
  } catch (e) {
    console.log('error' + e)
    return e
  }
}

const TZ = 'America/Denver'

const scheduler = () => {
  let job = new CronJob(
    '0 */1 * * * *',
    async () => {
      await consoleTest()
    },
    null,
    true,
    TZ
  )
  job.start()
}

module.exports = { scheduler }
