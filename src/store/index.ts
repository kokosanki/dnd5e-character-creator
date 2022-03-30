import { createStore } from 'vuex'

export default createStore({
  state: {
    name: '',
    race: ''
  },
  mutations: {
    setCharacterName (state, val) {
      state.name = val
    },
    setCharacterRace (state, val) {
      state.race = val
    }
  },
  getters: {
    characterName (state) {
      return state.name
    },
    characterRace (state) {
      return state.race
    }
  },
  actions: {},
  modules: {}
})
