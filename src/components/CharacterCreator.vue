<template>
  <div class="character-creator">
    <h1 class="character-creator__title">DnD&nbsp;5e<br />Character Creator</h1>
    <component ref="currentStep" :is="activeStep" v-model:isInputInvalid="isInputInvalid"></component>
    <div class="character-creator__navigation-buttons">
      <button :disabled="isFirstStep" @click="returnToPreviousStep">
        Back
      </button>
      <button :disabled="isInputInvalid" @click="moveToNextStep">Next</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NameStep from '@/components/Steps/NameStep.vue'
import { stepsDictionary } from '@/utils/stepsDictionary'

export default defineComponent({
  name: 'CharacterCreator',
  components: {
    NameStep
  },
  data () {
    return {
      currentStep: 1,
      isInputInvalid: true
    }
  },
  computed: {
    activeStep (): string {
      return stepsDictionary[this.currentStep]
    },
    isFirstStep (): boolean {
      return this.currentStep === 1
    }
  },
  methods: {
    moveToNextStep () {
      this.currentStep = this.currentStep + 1
    },
    returnToPreviousStep () {
      this.currentStep = this.currentStep - 1
    }
  }
})
</script>

<style scoped lang="scss">
.character-creator {
  min-height: 100vh;
  margin: 40px 20px;
  &__title {
    font-size: 30px;
    margin-bottom: 60px;
  }
  &__navigation-buttons {
    display: flex;
    justify-content: space-between;
    position: sticky;
    bottom: 0;
    margin-top: 10px;
  }
}
</style>
