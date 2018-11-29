import {getToken, setToken} from '@/utils/auth'
import {login} from '@/apis/user'

const user = {
  state: {
    token: getToken()
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    loginAction({commit}, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}

export default user
