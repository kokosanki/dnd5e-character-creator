import { RaceData, CharacterCharacteristics, Score } from '@/types/character'
import { Background } from '@/components/Steps/BackgroundStep/types'

export type StoreType = {
    name: string
    race: string
    raceData: RaceData | null,
    characterClass: string,
    characterAlignment: string,
    characterBackground: Background | null,
    characterAbilityScores: Score[],
    characterLanguages: string[],
    availableRolledStats: number[],
    characterCharacteristics: CharacterCharacteristics
}
