import styles from './styles.module.css'
import React from 'react'

export const Bar = ({ label, value, maxValue }) => {
  const health = (value / maxValue) * 100

  return (
    <div className={styles.main}>
      <div className={styles.label}>{label}</div>
      <div className={styles.max}>
        <div className={styles.value} style={{ width: `${health}%` }} />
      </div>
    </div>
  )
}
