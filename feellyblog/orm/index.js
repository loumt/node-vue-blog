const config = require('./../config/mysql')
const Sequelize = require('sequelize')

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: console.log,
  pool: config.pool
})

const user = require('./modules/user')

module.exports = sequelize
