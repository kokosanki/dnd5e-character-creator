import { createStore } from 'vuex'

export default createStore({
  state: {
    name: ''
  },
  mutations: {
    setCharacterName (state, val) {
      state.name = val
    }
  },
  getters: {
    characterName (state) {
      return state.name
    }
  },
  actions: {},
  modules: {}
})
