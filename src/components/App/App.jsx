import { Battle, GamerOver, StartMenu } from 'components'
import React, { useState } from 'react'
import styles from './styles.module.css'

export const App = () => {
  const [mode, setMode] = useState('start')

  return (
    <div className={styles.main}>
      {mode === 'start' && <StartMenu onStartClick={() => setMode('battle')} />}

      {mode === 'battle' && <Battle />}

      {mode === 'gameOver' && <GamerOver />}
    </div>
  )
}
