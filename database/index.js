const mongoose = require('mongoose')
const config = require('../config')

// 同步引入 info model和 studen model
require('./schema/info')
require('./schema/student')

module.exports = () => {
  mongoose.set('debug', true)

  mongoose.connect(config.dbPath)

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.dbPath)
  })
  mongoose.connection.on('error', err => {
    console.error(err)
  })

  mongoose.connection.on('open', async () => {
    console.log('Connected to MongoDB ', config.dbPath)
  })
}
