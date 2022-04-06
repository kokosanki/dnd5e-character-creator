export type Race = {
  index: number
  name: string
  url: string
}

export type Class = {
  index: number
  name: string
  url: string
}

export type Alignment = {
  index: number
  name: string
  url: string
}

export type RaceData = {
  index: string
  name: string
  url: string
  speed: number
  ability_bonuses: [
    {
      bonus: number
      ability_score: {
        index: string
        name: string
        url: string
      }
    }
  ]
  alignment: string
  age: string
  size: string
  size_description: string
  starting_proficiencies: [
    {
      index: string
      name: string
      url: string
    }
  ]
  starting_proficiency_options: {
    choose: number
    type: string
    from: [
      {
        index: string
        name: string
        url: string
      }
    ]
  }
  languages: [
    {
      index: string
      name: string
      url: string
    }
  ]
  language_desc: string
  traits: [
    {
      index: string
      name: string
      url: string
    }
  ]
  subraces: [
    {
      index: string
      name: string
      url: string
    }
  ]
}
