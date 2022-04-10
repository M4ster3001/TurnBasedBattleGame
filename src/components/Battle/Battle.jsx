import styles from './styles.module.css'
import React, { useState } from 'react'
import { CharacterSummary } from 'components/CharacterSummary'
import { opponentStats, playerStats } from 'shared'

export const Battle = () => {
  const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth)
  const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth)

  return (
    <div className={styles.main}>
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
      </div>
    </div>
  )
}
