export type Feature = {
    name: string
    description: string
}

export type BackgroundBonus = {
    criminalSpeciality?: string[]
    specialty?: string[]
    definingEvent?: string[]
}

export type Bonuses = {
    skillProficiencies: string[]
    languages: number
    equipment: string[]
    backgroundBonus?: BackgroundBonus
    feature: Feature
}

export type Characteristics = {
    personalityTrait: string[]
    ideal: string[]
    bond: string[]
    flaw: string[]
}

export interface Background {
    name: string
    index: string
    bonuses: Bonuses
    characteristics: Characteristics
}
