<template>
  <div class="race-step">
    <h2 class="race-step__title dnd-basic-title">Character Race</h2>
    <q-spinner-tail v-if="isLoading" color="primary" size="80px" />
    <div v-else v-for="(race, index) in races" :key="index">
      <q-radio :id="race.index" v-model="chosenRace" :val="race.name" :label="race.name" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  Ref,
  watch
} from 'vue'
import { Character } from '@/services/api/Character'
import { useStore } from 'vuex'

type Race = {
  index: number
  name: string
  url: string
}

export default defineComponent({
  name: 'RaceStep',
  props: {
    isInputValid: Boolean
  },
  setup (props, { emit }) {
    const races: Ref<Race[]> = ref([])
    const chosenRace: Ref<string> = ref('')

    const store = useStore()
    const setCharacterRace = (race: string) => {
      store.commit('setCharacterRace', race)
    }

    const isLoading: Ref<boolean> = ref(true)
    const getRaces = async () => {
      try {
        races.value = await Character.getRaces()
      } catch (err) {
        console.error(err)
      } finally {
        isLoading.value = false
      }
    }

    onMounted(() => {
      getRaces()
      chosenRace.value = store.getters.characterRace
      emit('update:isInputInvalid', Boolean(!chosenRace.value.length))
    })

    watch(
      () => chosenRace.value,
      (currentValue) => {
        emit('update:isInputInvalid', Boolean(!currentValue.length))
        setCharacterRace(currentValue)
      }
    )

    return {
      isLoading,
      races,
      chosenRace,
      characterRace: computed(() => store.state.race)
    }
  }
})
</script>
