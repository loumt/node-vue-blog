module.exports = {
  host: '67.216.216.19',
  port: 3306,
  username: 'admin',
  password: 'admin',
  dialect: 'mysql',
  database: 'node-vue-blog',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
//
// const Sequelize = require('sequelize')
//
// const sequelize = new Sequelize({
//     host: '67.216.216.19',
//     port: 3306,
//     username: 'admin',
//     password: 'admin',
//     dialect: 'mysql',
//     database: 'node-vue-blog',
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   }
// )
//
// const User = sequelize.define('user', {
//   username: Sequelize.DataTypes.STRING,
//   birthday: Sequelize.DataTypes.DATE
// });
//
// sequelize.sync()
//   .then(() => User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   }))
//   .then(jane => {
//     console.log(jane.toJSON());
//   });