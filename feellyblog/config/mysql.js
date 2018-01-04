module.exports = {
  host: '67.216.216.19',
  port: 3306,
  database: 'FeellyBlog',
  dialect: 'mysql',
  username: 'admin',
  password: 'admin',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
}
