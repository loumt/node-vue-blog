const getters = {
  //app
  language: state => state.app.language,

  //user
  token : state => state.user.token
}

module.exports = getters
