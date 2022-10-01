<template>
  <div class="language-step">
    <h2 class="class-step__title dnd-basic-title">Character Language</h2>
    <h4 v-if="languagesToBeChosen">
      Choose {{ languagesToBeChosen }} additional languages
    </h4>
    <q-spinner-tail v-if="isLoading" color="primary" size="80px" />

    <div
      v-else
      v-for="(characterLanguage, index) in allCharacterLanguages"
      :key="index"
    >
      <q-checkbox
        :disable="disableLanguage(characterLanguage.index)"
        :id="characterLanguage.index"
        v-model="chosenLanguages"
        :val="characterLanguage.index"
        :label="characterLanguage.name"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, Ref, watch } from 'vue'
import { Character } from '@/services/api/Character'
import { useStore } from 'vuex'

type CharacterLanguage = {
  index: number;
  name: string;
  url: string;
};

export default defineComponent({
  name: 'LanguageStep',
  props: {
    isInputInvalid: Boolean
  },
  setup (props, { emit }) {
    const allCharacterLanguages: Ref<CharacterLanguage[]> = ref([])
    const chosenLanguages: Ref<string[]> = ref([])

    const store = useStore()
    const setCharacterLanguages = (characterLanguages: string[]) => {
      store.commit('setCharacterLanguages', characterLanguages)
    }

    const defaultCharacterLanguages = computed(() => {
      return store.getters.defaultCharacterLanguages
    })
    const characterLanguages = computed(() => {
      return store.getters.characterLanguages
    })

    const isLoading: Ref<boolean> = ref(true)
    const getLanguages = async () => {
      try {
        allCharacterLanguages.value = await Character.getLanguages()
      } catch (err) {
        console.error(err)
      } finally {
        isLoading.value = false
      }
    }

    const disableLanguage = (language) => {
      return defaultCharacterLanguages.value.includes(language)
    }

    const languagesToBeChosen = computed(() => {
      return (
        (store.getters.characterRaceData?.language_options?.choose ?? 0) +
        (store.getters.characterBackground.bonuses?.languages ?? 0)
      )
    })

    onMounted(() => {
      chosenLanguages.value = [
        ...new Set([
          ...defaultCharacterLanguages.value,
          ...characterLanguages.value
        ])
      ]

      getLanguages()
      emit(
        'update:isInputInvalid',
        Boolean(
          !(
            chosenLanguages.value.length ===
            defaultCharacterLanguages.value.length + languagesToBeChosen.value
          )
        )
      )
    })

    watch(
      () => chosenLanguages.value,
      (currentValue) => {
        emit(
          'update:isInputInvalid',
          Boolean(
            !(
              currentValue.length ===
              defaultCharacterLanguages.value.length + languagesToBeChosen.value
            )
          )
        )
        setCharacterLanguages(currentValue)
      }
    )

    return {
      isLoading,
      allCharacterLanguages,
      chosenLanguages,
      disableLanguage,
      languagesToBeChosen
    }
  }
})
</script>

<style scoped></style>
