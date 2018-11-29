const Sequelize = require('sequelize')
const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const options = require('./../configure/mysql')

var sequelize = new Sequelize(options)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection [Mysql] successfully.');
    console.log(`Sequelize Version : ${Sequelize.version}`);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



fs.readdirSync(__dirname).filter(item => {
  return item !== 'index.js'
}).forEach(item => {
  sequelize.import(path.join(__dirname, item))
})

// console.dir(sequelize.models)

exports.sequelize = sequelize;
exports.Sequelize = Sequelize;
exports.DataTypes = Sequelize.DataTypes;
exports.db = sequelize.models;