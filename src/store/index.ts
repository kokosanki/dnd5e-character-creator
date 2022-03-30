import { createStore } from 'vuex'

export default createStore({
  state: {
    name: '',
    race: '',
    characterClass: ''
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
    }
  },
  actions: {},
  modules: {}
})
