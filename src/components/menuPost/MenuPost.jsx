import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./MenuPost.module.css"

const MenuPost = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
      {withImage && (
        <div className={styles.imagecontainer}>
          <Image
            src="/p1.jpeg"
            className={styles.image}
            alt="image"
            loading="lazy"
            fill
          />
        </div>
      )}
        <div className={styles.textcontainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>Lorem ipsum do</h3>
          <div className={styles.detail}>
            <span className={styles.userName}>Devloper</span>
            <span className={styles.date}> - 10.03.2024</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
      {withImage && (
        <div className={styles.imagecontainer}>
          <Image
            src="/p1.jpeg"
            className={styles.image}
            alt="image"
            loading="lazy"
            fill
          />
        </div>
      )}
        <div className={styles.textcontainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>Lorem ipsum do</h3>
          <div className={styles.detail}>
            <span className={styles.userName}>Devloper</span>
            <span className={styles.date}> - 10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
    {withImage && (
         <div className={styles.imagecontainer}>
         <Image
           src="/p1.jpeg"
           className={styles.image}
           alt="image"
           loading="lazy"
           fill
         />
       </div>
    )}
       
        <div className={styles.textcontainer}>
          <span className={`${styles.category} ${styles.Fashion}`}>
            fashion
          </span>
          <h3 className={styles.postTitle}>Lorem ipsum do</h3>
          <div className={styles.detail}>
            <span className={styles.userName}>Devloper</span>
            <span className={styles.date}> - 10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
      {withImage && (
        <div className={styles.imagecontainer}>
          <Image
            src="/p1.jpeg"
            className={styles.image}
            alt="image"
            loading="lazy"
            fill
          />
        </div>
      )}
        <div className={styles.textcontainer}>
          <span className={`${styles.category} ${styles.edtech}`}>Edtech</span>
          <h3 className={styles.postTitle}>Lorem ipsum do</h3>
          <div className={styles.detail}>
            <span className={styles.userName}>Devloper</span>
            <span className={styles.date}> - 10.03.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPost;
