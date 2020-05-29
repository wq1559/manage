import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: []
  },
  mutations: {
    setData (state, data) {
      state.tableData = data
    }
  },
  actions: {
    getData ({ commit }, tableData) {
      commit('setData', tableData)
    }
  },
  modules: {
  }
})
