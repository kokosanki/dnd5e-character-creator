import { createStore } from 'vuex'

export default createStore({
  state: {
    name: '',
    race: '',
    characterClass: '',
    characterAlignment: ''
  },
  mutations: {
    setCharacterName (state, val) {
      state.name = val
    },
    setCharacterRace (state, val) {
      state.race = val
    },
    setCharacterClass (state, val) {
      state.characterClass = val
    },
    setCharacterAlignment (state, val) {
      state.characterAlignment = val
    }
  },
  getters: {
    characterName (state) {
      return state.name
    },
    characterRace (state) {
      return state.race
    },
    characterClass (state) {
      return state.characterClass
    },
    characterAlignment (state) {
      return state.characterAlignment
    }
  },
  actions: {},
  modules: {}
})
