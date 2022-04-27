<template>
  <div class="background-step">
    <div class="background-step__list">
      <div
        v-for="background in backgrounds"
        :key="background.index"
        class="background-step__list-item"
      >
        <q-radio
          class="background-step__background"
          v-model="chosenBackground"
          :val="background.index"
          :label="background.name"
        />
        <q-icon name="fas fa-solid fa-circle-info" />
        <q-btn
          class="background-step__icon"
          round
          @click="openBackgroundDetailsModal(background.index)"
          color="primary"
          icon="fas fa-info"
          size="xs"
        />
      </div>
    </div>
    <background-details-modal
      v-if="isModalOpen && backgroundInModal"
      v-model:isModalOpen="isModalOpen"
      :backgroundInModal="backgroundInModal"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, Ref, ref, watch } from 'vue'
import { backgrounds } from '@/components/Steps/BackgroundStep/backgrounds'
import { Background } from '@/components/Steps/BackgroundStep/types'
import backgroundDetailsModal from '@/components/Steps/BackgroundStep/backgroundDetailsModal.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: { backgroundDetailsModal },
  setup (props, { emit }) {
    const chosenBackground: Ref<string> = ref('')
    const columns = [
      {
        name: 'name',
        required: true,
        label: '',
        align: 'left',
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true
      }
    ]

    const store = useStore()
    const setCharacterBackground = (characterBackground: Background) => {
      store.commit('setCharacterBackground', characterBackground)
    }

    onMounted(() => {
      if (store.getters.characterBackground?.index) {
        chosenBackground.value = store.getters.characterBackground.index
      }
      emit('update:isInputInvalid', Boolean(!chosenBackground.value))
    })

    watch(
      () => chosenBackground.value,
      (currentValue) => {
        const chosenBackgroundData = backgrounds.find(background => background.index === currentValue)
        if (chosenBackgroundData) {
          setCharacterBackground(chosenBackgroundData)
          emit('update:isInputInvalid', Boolean(!chosenBackgroundData))
        }
      }
    )

    const isModalOpen: Ref<boolean> = ref(false)
    const backgroundInModal: Ref<string> = ref('')
    const openBackgroundDetailsModal = (
      backgroundToBeDisplayedInModal
    ): void => {
      isModalOpen.value = true
      backgroundInModal.value = backgroundToBeDisplayedInModal
    }
    return {
      backgrounds,
      columns,
      chosenBackground,
      openBackgroundDetailsModal,
      isModalOpen,
      backgroundInModal
    }
  }
})
</script>

<style lang="scss">
.background-step {
  &__list {
    display: flex;
    flex-direction: column;
  }
  &__icon {
    transform: scale(0.7);
  }
}
</style>
