import styles from './styles.module.css'
import React, { useState } from 'react'
import { CharacterSummary } from 'components/CharacterSummary'
import { opponentStats, playerStats } from 'shared'
import { BattleMenu } from 'components/BattleMenu'
import { BattleAnnouncer } from 'components/BattleAnnouncer'
import { useBattleSequece } from 'hooks'

export const Battle = () => {
  const { opponentHealth, playerHealth, annoucerMessage } = useBattleSequece()

  function handleAttack() {}

  function handleMagic() {}

  function handleHeal() {}

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
              // className={styles}
            />
          </div>

          <div className={styles.opponentSprite}>
            <img
              alt={opponentStats.name}
              src={opponentStats.img}
              // className={styles}
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
              onAttack={handleAttack}
              onMagic={handleMagic}
              onHeal={handleHeal}
            />
          </div>
        </div>
      </div>
    </>
  )
}
