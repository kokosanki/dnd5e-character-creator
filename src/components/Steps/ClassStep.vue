<template>
  <div class="class-step">
    <h2 class="class-step__title dnd-basic-title">Character Class</h2>
    <q-spinner-tail v-if="isLoading" color="primary" size="80px" />

    <div v-else v-for="(characterClass, index) in characterClasses" :key="index">
      <q-radio :id="characterClass.index" v-model="chosenClass" :val="characterClass.name" :label="characterClass.name" />
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
