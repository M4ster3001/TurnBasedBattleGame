import { useEffect, useState } from 'react'
import { attack, opponentStats, playerStats, wait } from 'shared'

export const useBattleSequece = ({ sequence }) => {
  const [turn, setTurn] = useState(0)
  const [inSequence, setInSequence] = useState(false)
  const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth)
  const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth)
  const [annoucerMessage, setAnnoucerMessage] = useState('')
  const [playerAnimation, setPlayerAnimation] = useState('static')
  const [opponentAnimation, setOpponentAnimation] = useState('static')

  useEffect(() => {
    const { mode, turn } = sequence

    if (mode) {
      const attacker = turn === 0 ? playerStats : opponentStats
      const receiver = turn === 0 ? opponentStats : playerStats

      switch (mode) {
        case 'attack':
          {
            const damage = attack({ attacker, receiver })
            ;(async () => {
              setInSequence(true)
              setAnnoucerMessage(`${attacker.name} has chosen to attack`)

              await wait(1000)

              turn === 0
                ? setPlayerAnimation('attack')
                : setOpponentAnimation('attack')

              await wait(100)

              turn === 0
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static')

              await wait(500)

              turn === 0
                ? setOpponentAnimation('damage')
                : setPlayerAnimation('damage')

              await wait(750)

              turn === 0
                ? setOpponentAnimation('static')
                : setPlayerAnimation('static')

              setAnnoucerMessage(`${receiver.name} felt that!!`)

              turn === 0
                ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
                : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0))

              await wait(2000)

              setAnnoucerMessage(`Now it's ${receiver.name} turn!`)

              await wait(1000)

              setTurn(turn === 0 ? 1 : 0)
              setInSequence(false)
            })()
          }
          break

        default:
          break
      }
    }
  }, [sequence])

  return {
    turn,
    inSequence,
    playerHealth,
    opponentHealth,
    annoucerMessage,
    playerAnimation,
    opponentAnimation
  }
}
