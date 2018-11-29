import Cookie from 'js-cookie'

const app = {
  state: {
    language: Cookie.get('locale') || 'zh'
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      Cookie.set('locale', language)
      state.language = language
    }
  },
  actions: {
    setLanguage({commit}, language) {
      console.log(language)
      commit('SET_LANGUAGE',language)
    }
  }
}

export default app
