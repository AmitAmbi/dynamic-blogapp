import Link from 'next/link'
import React from 'react';
import styles  from "./MenuCategory.module.css"

const MenuCategory = () => {
  return (
    <div>
       <div className={styles.categories}>
        <Link
          href="/blog/?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.style}`}
          >
            style
          </Link>

          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.Fashion}`}
          >
            Fashion
          </Link>

          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.Travel}`}
          >
            Travel
          </Link>
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.edtech}`}
          >
            edtech
          </Link>

          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.Coding}`}
          >
            Coding
          </Link>

          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.food}`}
          >
            food
          </Link>
        </Link>
      </div>
    </div>
  )
}

export default MenuCategory
