import React from 'react'
import styles from './Pages.module.css'
import { YouTubeEmbed } from '../Videos/YouTubeEmbed'

export const GameDevPortfolio = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.baseContainer}>
          <YouTubeEmbed videoId="qSp8BiXppH0" width="50%" height="500px" />
      </div>
    </div>
  )
}