<template>
  <div>
    <q-dialog v-model="isOpen" full-height full-width>
      <q-card>
        <q-card-section class="col q-pt-none">
          <h3>{{ chosenBackgroundData.name }}</h3>
          <div>
            <h4>Bonuses:</h4>
            <div>
              <h5>Skill proficiencies:</h5>
              <ul>
                <li
                  v-for="proficiency in chosenBackgroundData.bonuses
                    .skillProficiencies"
                  :key="proficiency"
                >
                  {{ proficiency }}
                </li>
              </ul>
            </div>
            <div v-if="chosenBackgroundData.bonuses.languages">
              <h5>Languages to chose:</h5>
              <p>{{ chosenBackgroundData.bonuses.languages }}</p>
            </div>
            <div>
              <h5>Equipment:</h5>
              <ul>
                <li
                  v-for="equipment in chosenBackgroundData.bonuses.equipment"
                  :key="equipment"
                >
                  {{ equipment }}
                </li>
              </ul>
            </div>
            <div v-if="chosenBackgroundData.bonuses.languages">
              <h5>Feature:</h5>
              <h6>{{ chosenBackgroundData.bonuses.feature.name }}</h6>
              <p>{{ chosenBackgroundData.bonuses.feature.description }}</p>
            </div>
          </div>
          <div>
            <h4>Characteristics</h4>
            <div>
              <h5>Example personality traits</h5>
              <ul>
                <li
                  v-for="trait in chosenBackgroundData.characteristics
                    .personalityTrait"
                  :key="trait"
                >
                  {{ trait }}
                </li>
              </ul>
            </div>
            <div>
              <h5>Example ideals</h5>
              <ul>
                <li
                  v-for="ideal in chosenBackgroundData.characteristics
                    .ideal"
                  :key="ideal"
                >
                  {{ ideal }}
                </li>
              </ul>
            </div>
            <div>
              <h5>Example bonds</h5>
              <ul>
                <li
                  v-for="bond in chosenBackgroundData.characteristics
                    .bond"
                  :key="bond"
                >
                  {{ bond }}
                </li>
              </ul>
            </div>
            <div>
              <h5>Example flaws</h5>
              <ul>
                <li
                  v-for="flaw in chosenBackgroundData.characteristics
                    .flaw"
                  :key="flaw"
                >
                  {{ flaw }}
                </li>
              </ul>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { backgrounds } from '@/components/Steps/BackgroundStep/backgrounds'
import { Background } from '@/components/Steps/BackgroundStep/types'

export default defineComponent({
  props: {
    isModalOpen: Boolean,
    backgroundInModal: String
  },
  setup (props, { emit }) {
    const isOpen = computed({
      get: () => props.isModalOpen,
      set: (v) => emit('update:isModalOpen', v)
    })

    const chosenBackgroundData = computed((): Background | undefined => {
      return backgrounds.find(
        (background) => background.index === props.backgroundInModal
      )
    })

    return {
      isOpen,
      chosenBackgroundData
    }
  }
})
</script>

<style scoped></style>
