const Twitter = require('twitter')
const CronJob = require('cron').CronJob

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
