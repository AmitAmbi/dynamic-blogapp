import React from 'react'
import styles from "./BlogPage.module.css"
import CardList from '@/components/cardList/CardList'

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <CardList/>
      </div>
    </div>
  )
}

export default page
