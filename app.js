require('dotenv').config()

const express = require('express')
const { scheduler } = require('./utils/')

const app = express()

scheduler()

const PORT = Number(8888)

app.listen(PORT, () => {
  console.log(`\n*** CronJob server is running on port ${PORT} ***\n`)
})
