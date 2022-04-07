<template>
  <div class="ability-scores-step">
    <h2 class="ability-scores-step__title dnd-basic-title">
      Ability Scores for {{ characterRaceData.name }}
    </h2>
    <q-spinner-tail v-if="isLoading" color="primary" size="80px" />
    <div v-else>
      <h3 class="ability-scores-step__instruction">
        Roll character's ability scores
      </h3>
      <div>
        <q-btn
          @click="rollScores"
          color="grey-4"
          text-color="primary"
          glossy
          unelevated
          icon="fas fa-dice"
          label="Roll stats"
        />
        <div v-if="availableScores.length">
          <h4 class="ability-scores-step__header">available scores</h4>
          <div
            class="ability-scores-step__available-stats"
            v-for="(score, index) in availableScores"
            :key="index"
          >
            <div class="ability-scores-step__score">{{ score.stat }}</div>
          </div>
          <div v-for="(abilityScore, index) in abilityScores" :key="index">
            <label>{{ abilityScore.name }}: </label>

            <select
              v-model="abilityScore.points"
              name="allAvailableAbilityScores"
              id="allAvailableAbilityScores"
            >
              <option :value="{ stat: 0, index: '', id: null }"></option>
              <option
                v-for="(score, index) in availableScores"
                :disabled="isOptionDisabled(score, abilityScore)"
                :key="index"
                :value="score"
              >
                {{ score.stat }}
              </option>
            </select>
            <span class="ability-scores-step__bonus">{{
              printBonus(abilityScore.name)
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, Ref, watch } from 'vue'
import { Character } from '@/services/api/Character'
import { useStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import { RaceData } from '@/types/character'
import { abilitiesDictionary } from '@/utils/abilitiesDictionary'
import { rollScore } from '@/components/Steps/AbilityScoresStep/calculations'

type RolledStat = {
  stat: number
  id: string | null
}

type Score = {
  name: string
  index: string
  points: RolledStat
}
export default defineComponent({
  name: 'RaceStep',
  props: {
    isInputValid: Boolean
  },
  setup (props, { emit }) {
    const store = useStore()
    const setCharacterRaceData = (race: RaceData) => {
      store.commit('setCharacterRaceData', race)
    }
    const setCharacterAbilityScores = (abilityScores: Score[]) => {
      store.commit('setCharacterAbilityScores', abilityScores)
    }
    const setRolledStats = (rolledAbilityScores: RolledStat[]) => {
      store.commit('setRolledStats', rolledAbilityScores)
    }

    const characterRaceData = computed(() => store.getters.characterRaceData)

    const abilityScores: Ref<Score[]> = ref([
      {
        name: 'strength',
        index: 'str',
        points: {
          stat: 0,
          id: null
        }
      },
      {
        name: 'dexterity',
        index: 'dex',
        points: {
          stat: 0,
          id: null
        }
      },
      {
        name: 'constitution',
        index: 'con',
        points: {
          stat: 0,
          id: null
        }
      },
      {
        name: 'wisdom',
        index: 'wis',
        points: {
          stat: 0,
          id: null
        }
      },
      {
        name: 'charisma',
        index: 'cha',
        points: {
          stat: 0,
          id: null
        }
      },
      {
        name: 'intelligence',
        index: 'int',
        points: {
          stat: 0,
          id: null
        }
      }
    ])

    const availableScores: Ref<RolledStat[]> = ref([])

    const rollScores = () => {
      availableScores.value = []

      for (let index = 0; index < 6; index++) {
        const rolledScore = rollScore()
        const points = { stat: rolledScore, id: uuidv4() }

        availableScores.value.push(points)
        abilityScores.value[index].points = points
      }
      setRolledStats(availableScores.value)
    }

    const isOptionDisabled = (scoreOption: RolledStat) => {
      return abilityScores.value.some(
        (abilityScore) => abilityScore.points.id === scoreOption.id
      )
    }

    const isLoading: Ref<boolean> = ref(true)
    const getChosenRaceData = async () => {
      try {
        const characterRace = store.getters.characterRace.toLowerCase()
        const res = await Character.getRaceData(characterRace)
        setCharacterRaceData(res)
      } catch (err) {
        console.error(err)
      } finally {
        isLoading.value = false
      }
    }

    const calculateBonus = (abilityScoreName: string) => {
      return characterRaceData.value.ability_bonuses.find(
        (bonus) =>
          abilitiesDictionary[bonus.ability_score.index] === abilityScoreName
      )?.bonus
    }
    const printBonus = (abilityScoreName: string) => {
      const bonus = calculateBonus(abilityScoreName)
      return bonus ? `+ ${bonus}` : null
    }

    const validateAbilityScores = (abilityScores: Ref<Score[]>) => {
      const isInputInvalid = abilityScores.value.some(
        (score) => !score.points.stat
      )
      emit('update:isInputInvalid', isInputInvalid)
    }

    const prepopulateData = () => {
      if (store.getters.characterAbilityScores.length) {
        abilityScores.value = store.getters.characterAbilityScores
      }
      availableScores.value = store.getters.availableRolledStats
    }

    onMounted(() => {
      getChosenRaceData()
      prepopulateData()
      validateAbilityScores(abilityScores)
    })

    watch(
      () => abilityScores.value,
      (currentValue) => {
        setCharacterAbilityScores(currentValue)
        validateAbilityScores(abilityScores)
      },
      { deep: true }
    )

    return {
      rollScores,
      abilityScores,
      availableScores,
      isOptionDisabled,
      characterRaceData,
      abilitiesDictionary,
      printBonus,
      isLoading
    }
  }
})
</script>
<style scoped lang="scss">
.ability-scores-step {
  &__available-stats {
    display: inline-block;
    margin-bottom: 15px;
  }
  &__header {
    margin: 15px 0;
    text-transform: capitalize;
  }
  &__score {
    margin: 0 10px;
  }
  &__bonus {
    margin-left: 5px;
  }
  &__instruction {
    font-size: 24px;
  }
}
</style>
