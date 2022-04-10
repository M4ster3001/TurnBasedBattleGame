import styles from './styles.module.css'
import React from 'react'

export const StartMenu = ({ onStartClick }) => {
  return (
    <div className={styles.main}>
      <button
        className={styles.StartMenu}
        onClick={() => onStartClick('battle')}
      >
        Start Game
      </button>
    </div>
  )
}
