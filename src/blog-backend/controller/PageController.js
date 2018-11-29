const { body, query, validationResult } = require('express-validator/check')
const UserService = require('./../services/UserService')

module.exports = {
  'toHome': (req,res)=>{
    res.render('home')
  }
}