import React from 'react'
import styles from "./Card.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
<Image src="/p1.jpeg" alt='images post' fill className={styles.image}/>
</div>
<div className={styles.textcontainer}>

    <div className={styles.detail}>

        <span className={styles.date}>11.02.2023 - </span>
        <span className={styles.category}>CULTURE</span>
    </div>
    <Link href="/">
    <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </h1>
    </Link>
    <p className={styles.des}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta officia, quam distinctio laboriosam sed odit eveniet praesentium consequatur quae eligendi sunt est enim. Ipsum aspernatur voluptas odit, explicabo dignissimos possimus?.....</p>
    <Link  href="/"   className={styles.link}> Read More</Link>
</div>
    </div>
  )
}

export default Card
