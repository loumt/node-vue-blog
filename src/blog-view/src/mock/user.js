const users = {
  admin: {
    username:'admin',
    role:'admin',
    token: 'admin'
  },
  user: {
    username:'user',
    role:'user',
    token: 'user'
  }
}

export default {
  login : config => {
    const {username} = JSON.parse(config.body)
    return users[username]
  }
}
