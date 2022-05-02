<template>
  <div class="characteristics-step" v-if="chosenBackground">
    <h4>{{ chosenBackground.name }}</h4>
    <div
      v-for="(singleTrait, key) in chosenBackground.characteristics"
      :key="key"
    >
      <h5>{{ deslugifyName(key) }}</h5>
      <div class="characteristics-step__list">
        <q-radio
          v-for="item in singleTrait"
          :key="item"
          class="characteristics-step__item"
          v-model="chosenCharacteristics[key]"
          :val="item"
          :label="item"
        />
        <h6>Edit chosen characteristic or write your own:</h6>
        <q-input v-model="chosenCharacteristics[key]" :label="deslugifyName(key)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, Ref, ref, watch } from 'vue'
import { Background } from '@/components/Steps/BackgroundStep/types'
import { useStore } from 'vuex'
import _ from 'lodash'

type CharacterCharacteristics = {
  personalityTrait: string
  ideal: string
  bond: string
  flaw: string
}

export default defineComponent({
  setup (props, { emit }) {
    const chosenBackground: Ref<Background | null> = ref(null)
    const chosenCharacteristics: Ref<CharacterCharacteristics> = ref({
      personalityTrait: '',
      ideal: '',
      bond: '',
      flaw: ''
    })

    const areNoneElementsChosen = computed(() => {
      return Boolean(Object.values(chosenCharacteristics.value).includes(''))
    })

    const store = useStore()
    const setCharacterCharacteristics = (characterCharacteristics: CharacterCharacteristics) => {
      store.commit('setCharacterCharacteristics', characterCharacteristics)
    }

    onMounted(() => {
      chosenBackground.value = store.getters.characterBackground
      chosenCharacteristics.value = store.getters.characterCharacteristics
    })

    watch(
      () => _.cloneDeep(chosenCharacteristics.value),
      (currentValue) => {
        emit('update:isInputInvalid', areNoneElementsChosen.value)
        setCharacterCharacteristics(currentValue)
      }
    )

    const deslugifyName = (name) => {
      return name.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
        return str.toUpperCase()
      })
    }
    return {
      chosenBackground,
      chosenCharacteristics,
      deslugifyName
    }
  }
})
</script>

<style scoped lang="scss">
.characteristics-step {
  &__list {
    display: flex;
    flex-direction: column;
  }
}
</style>
