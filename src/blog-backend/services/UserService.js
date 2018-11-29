const BaseService = require('./BaseService')
const {User} = require('./../models').db

class UserService extends BaseService{
  constructor(model){
    super(model)
  }
}
module.exports = new UserService(User)
