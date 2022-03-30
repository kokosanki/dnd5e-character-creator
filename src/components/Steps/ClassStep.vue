<template>
  <div class="class-step">
    <h2 class="class-step__title">Character Class</h2>
    <div v-if="isLoading">Loading...</div>
    <div v-else v-for="(characterClass, index) in characterClasses" :key="index">
      <input
        type="radio"
        :id="characterClass.index"
        :value="characterClass.name"
        v-model="chosenClass"
      />
      <label :for="characterClass.name">{{ characterClass.name }} </label>
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

type CharacterClass = {
  index: number
  name: string
  url: string
}

export default defineComponent({
  name: 'ClassStep',
  props: {
    isInputValid: Boolean
  },
  setup (props, { emit }) {
    const characterClasses: Ref<CharacterClass[]> = ref([])
    const chosenClass: Ref<string> = ref('')

    const store = useStore()
    const setCharacterClass = (characterClass: string) => {
      store.commit('setCharacterClass', characterClass)
    }

    const isLoading: Ref<boolean> = ref(true)
    const getClasses = async () => {
      try {
        characterClasses.value = await Character.getClasses()
      } catch (err) {
        console.error(err)
      } finally {
        isLoading.value = false
      }
    }

    onMounted(() => {
      getClasses()
      chosenClass.value = store.getters.characterClass
      emit('update:isInputInvalid', Boolean(!chosenClass.value.length))
    })

    watch(
      () => chosenClass.value,
      (currentValue) => {
        emit('update:isInputInvalid', Boolean(!currentValue.length))
        setCharacterClass(currentValue)
      }
    )

    return {
      isLoading,
      characterClasses,
      chosenClass,
      characterClass: computed(() => store.state.characterClass)
    }
  }
})
</script>
<style scoped lang="scss"></style>
