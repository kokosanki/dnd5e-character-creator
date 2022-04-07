<template>
  <div class="character-creator">
    <h1 class="character-creator__title">DnD&nbsp;5e<br />Character Creator</h1>
    <component ref="currentStep" :is="activeStep" v-model:isInputInvalid="isInputInvalid"></component>
    <div class="character-creator__navigation-buttons">
      <q-btn color="primary" :disabled="isFirstStep" @click="returnToPreviousStep" label="Back" />
      <q-btn color="primary" :disabled="isInputInvalid" @click="moveToNextStep" label="Next"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NameStep from '@/components/Steps/NameStep.vue'
import RaceStep from '@/components/Steps/RaceStep.vue'
import ClassStep from '@/components/Steps/ClassStep.vue'
import AlignmentStep from '@/components/Steps/AlignmentStep.vue'
import AbilityScoresStep from '@/components/Steps/AbilityScoresStep/index.vue'
import { stepsDictionary } from '@/utils/stepsDictionary'

export default defineComponent({
  name: 'CharacterCreator',
  components: {
    NameStep,
    RaceStep,
    ClassStep,
    AlignmentStep,
    AbilityScoresStep
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
    font-size: 36px;
    margin-top: 0;
    margin-bottom: 40px;
    line-height: 1.3;
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
