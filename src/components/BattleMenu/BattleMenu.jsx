import styles from './styles.module.css'
import React from 'react'

export const BattleMenu = ({ onAttack, onMagic, onHeal }) => {
  return (
    <div className={styles.main}>
      <div className={styles.option} onClick={onAttack}>
        Attack
      </div>
      <div className={styles.option} onClick={onMagic}>
        Magic
      </div>
      <div className={styles.option} onClick={onHeal}>
        Heal
      </div>
    </div>
  )
}
