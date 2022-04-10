import styles from './styles.module.css'
import React from 'react'

const red = '#821200'
const blue = '#1953cb'

export const PlayerSummary = ({ main = false }) => {
  return (
    <div style={{ backgroundColor: main ? red : blue }} className={styles.main}>
      Player Summary
    </div>
  )
}
