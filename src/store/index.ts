import { createStore } from 'vuex'

export default createStore({
  state: {
    name: '',
    race: '',
    raceData: {},
    characterClass: '',
    characterAlignment: '',
    characterBackground: {},
    characterAbilityScores: [],
    availableRolledStats: [],
    characterCharacteristics: {
      bond: '',
      flaw: '',
      ideal: '',
      personalityTrait: ''
    }
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
    },
    setCharacterRaceData (state, val) {
      state.raceData = val
    },
    setCharacterAbilityScores (state, val) {
      state.characterAbilityScores = val
    },
    setCharacterBackground (state, val) {
      state.characterBackground = val
    },
    setRolledStats (state, val) {
      state.availableRolledStats = val
    },
    setCharacterCharacteristics (state, val) {
      state.characterCharacteristics = val
    }
  },
  getters: {
    characterName (state) {
      return state.name
    },
    characterRace (state) {
      return state.race
    },
    characterRaceData (state) {
      return state.raceData
    },
    characterClass (state) {
      return state.characterClass
    },
    characterAlignment (state) {
      return state.characterAlignment
    },
    characterAbilityScores (state) {
      return state.characterAbilityScores
    },
    characterBackground (state) {
      return state.characterBackground
    },
    characterCharacteristics (state) {
      return state.characterCharacteristics
    },
    availableRolledStats (state) {
      return state.availableRolledStats
    }
  },
  actions: {},
  modules: {}
})
