export const rollADice = (): number => {
  return Math.floor(Math.random() * 6 + 1)
}

export const rollScore = (): number => {
  const rolledStats: number[] = []

  for (let index = 0; index < 4; index++) {
    rolledStats.push(rollADice())
  }

  rolledStats.sort().shift()
  return rolledStats.reduce((a, b) => a + b)
}
