import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Popuplar Categories</h1>
      <div className={styles.categories}>
        {/* <div className={styles.category}> */}

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            alt="style"
            width={32}
            height={32}
            loading="lazy"
            className={styles.image}
          />
          style
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.Fashion}`}
        >
          <Image
            src="/fashion.png"
            alt="style"
            width={32}
            height={32}
            loading="lazy"
            className={styles.image}
          />
          Fashion
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.Travel}`}
        >
          <Image
            src="/travel.png"
            alt="style"
            width={32}
            height={32}
            loading="lazy"
            className={styles.image}
          />
          Travel
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.edtech}`}
        >
          <Image
            src="/culture.png"
            alt="style"
            width={32}
            height={32}
            loading="lazy"
            className={styles.image}
          />
          edtech
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.Coding}`}
        >
          <Image
            src="/coding.png"
            alt="style"
            width={32}
            height={32}
            loading="lazy"
            className={styles.image}
          />
          Coding
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/food.png"
            alt="style"
            width={32}
            height={32}
            loading="lazy"
            className={styles.image}
          />
          food
        </Link>
      </div>

      {/* </div> */}
    </div>
  );
};

export default CategoryList;
