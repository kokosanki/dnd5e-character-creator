<template>
  <div class="alignment-step">
    <h2 class="alignment-step__title dnd-basic-title">Character Alignment</h2>
    <q-spinner-tail v-if="isLoading" color="primary" size="80px" />
    <div v-else v-for="(alignment, index) in alignments" :key="index">
      <q-radio :id="alignment.index" v-model="chosenAlignment" :val="alignment.name" :label="alignment.name" />
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

type Alignment = {
  index: number
  name: string
  url: string
}

export default defineComponent({
  name: 'AlignmentStep',
  props: {
    isInputValid: Boolean
  },
  setup (props, { emit }) {
    const alignments: Ref<Alignment[]> = ref([])
    const chosenAlignment: Ref<string> = ref('')

    const store = useStore()
    const setCharacterAlignment = (alignment: string) => {
      store.commit('setCharacterAlignment', alignment)
    }

    const isLoading: Ref<boolean> = ref(true)
    const getAlignments = async () => {
      try {
        alignments.value = await Character.getAlignments()
      } catch (err) {
        console.error(err)
      } finally {
        isLoading.value = false
      }
    }

    onMounted(() => {
      getAlignments()
      chosenAlignment.value = store.getters.characterAlignment
      emit('update:isInputInvalid', Boolean(!chosenAlignment.value.length))
    })

    watch(
      () => chosenAlignment.value,
      (currentValue) => {
        emit('update:isInputInvalid', Boolean(!currentValue.length))
        setCharacterAlignment(currentValue)
      }
    )

    return {
      isLoading,
      alignments,
      chosenAlignment,
      characterAlignment: computed(() => store.state.alignment)
    }
  }
})
</script>
<style scoped lang="scss"></style>
