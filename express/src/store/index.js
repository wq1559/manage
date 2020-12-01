import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: ''
  },
  mutations: {
    SET_LOGIN(state, userinfo) {
      state.userInfo = userinfo;
    }
  },
  actions: {
    userLogin({commit}, userinfo) {
      commit('SET_LOGIN', userinfo);
    }
  },
  modules: {
  }
})
