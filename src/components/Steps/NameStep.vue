<template>
  <div class="name-step">
    <h2 class="name-step__title dnd-basic-title">Character Name</h2>
    <p v-if="isNameTooLong" class="name-step__warning">{{ warningMessage }}</p>
    <q-input outlined v-model="characterName" placeholder="Please, type the character name" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUpdated, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'NameStep',
  props: {
    isInputValid: Boolean
  },
  setup (props, { emit }) {
    const characterName = ref('')
    const warningMessage = ref('')

    const store = useStore()
    const setCharacterName = (name: string) => {
      store.commit('setCharacterName', name)
    }

    const isNameInvalid = computed(() => {
      return Boolean(!characterName.value.length || isNameTooLong.value)
    })

    const isNameTooLong = computed(() => {
      return characterName.value.length > 100
    })

    const setWarningMessage = () => {
      if (isNameTooLong.value) {
        warningMessage.value =
          'Your character name should be shorter than 100 characters.'
      }
    }

    const toggleNextButton = () => {
      emit('update:isInputInvalid', isNameInvalid.value)
    }

    onMounted(() => {
      characterName.value = store.getters.characterName
    })

    onUpdated(() => {
      setCharacterName(characterName.value)
      setWarningMessage()
      toggleNextButton()
    })

    return {
      characterName,
      warningMessage,
      setCharacterName,
      setWarningMessage,
      isNameInvalid,
      isNameTooLong,
      toggleNextButton
    }
  }
})
</script>
<style scoped lang="scss">
.name-step {
  &__input {
    width: 100%;
  }
  &__warning {
    color: red;
  }
}
</style>
