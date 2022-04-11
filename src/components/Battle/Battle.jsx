import styles from './styles.module.css'
import React, { useEffect, useState } from 'react'
import { CharacterSummary } from 'components/CharacterSummary'
import { opponentStats, playerStats } from 'shared'
import { BattleMenu } from 'components/BattleMenu'
import { BattleAnnouncer } from 'components/BattleAnnouncer'
import { useAIOpponent, useBattleSequence } from 'hooks'

export const Battle = () => {
  const [sequence, setSequence] = useState({})
  const {
    turn,
    opponentHealth,
    playerHealth,
    annoucerMessage,
    inSequence,
    playerAnimation,
    opponentAnimation
  } = useBattleSequence(sequence)

  const aiChoice = useAIOpponent(turn)

  useEffect(() => {
    if (aiChoice && turn === 1 && !inSequence) {
      setSequence({ turn, mode: aiChoice })
    }
  }, [turn, aiChoice, inSequence])

  return (
    <>
      <div className={styles.opponent}>
        <div className={styles.summary}>
          <CharacterSummary
            name={opponentStats.name}
            health={opponentHealth}
            maxHealth={opponentStats.maxHealth}
            level={opponentStats.level}
          />
        </div>
      </div>

      <div className={styles.characters}>
        <div className={styles.gameHeader}>
          {playerStats.name} vs {opponentStats.name}
        </div>

        <div className={styles.gameImages}>
          <div className={styles.playerSprite}>
            <img
              alt={playerStats.name}
              src={playerStats.img}
              className={styles[playerAnimation]}
            />
          </div>

          <div className={styles.opponentSprite}>
            <img
              alt={opponentStats.name}
              src={opponentStats.img}
              className={styles[opponentAnimation]}
            />
          </div>
        </div>
      </div>

      <div className={styles.user}>
        <div className={styles.summary}>
          <CharacterSummary
            main
            name={playerStats.name}
            health={playerHealth}
            maxHealth={playerStats.maxHealth}
            level={playerStats.level}
          />
        </div>

        <div className={styles.hud}>
          <div className={styles.hudChild}>
            <BattleAnnouncer
              message={annoucerMessage || `What will ${playerStats.name} do?`}
            />
          </div>
          <div className={styles.hudChild}>
            <BattleMenu
              onAttack={setSequence({ turn, mode: 'attack ' })}
              onMagic={setSequence({ turn, mode: 'magic ' })}
              onHeal={setSequence({ turn, mode: 'heal ' })}
            />
          </div>
        </div>
      </div>
    </>
  )
}
