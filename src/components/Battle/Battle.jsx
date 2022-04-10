import styles from './styles.module.css'
import React from 'react'
import { PlayerSummary } from 'components/PlayerSummary'

export const Battle = () => {
  return (
    <div className={styles.main}>
      <div className={styles.opponent}>
        <div className={styles.summary}>
          <PlayerSummary />
        </div>
      </div>
      <div className={styles.user}>
        <div className={styles.summary}>
          <PlayerSummary main />
        </div>
      </div>
    </div>
  )
}
