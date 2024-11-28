import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "../menuPost/MenuPost";
import MenuCategory from "../menucategory/MenuCategory";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>{"whats's Hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>

      <MenuPost withImage={false} />
      <h2 className={styles.subTitle}>Discover by Topic</h2>
      <h1 className={styles.title}>categories</h1>
     <MenuCategory/>

      <h2 className={styles.subTitle}>Choose by the Editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>

<MenuPost withImage={true}/>
      {/* <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imagecontainer}>
            <Image
              src="/p1.jpeg"
              className={styles.image}
              alt="image"
              loading="lazy"
              fill
            />
          </div>
          <div className={styles.textcontainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum do</h3>
            <div className={styles.detail}>
              <span className={styles.userName}>Devloper</span>
              <span className={styles.date}> - 10.03.2024</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          <div className={styles.imagecontainer}>
            <Image
              src="/p1.jpeg"
              className={styles.image}
              alt="image"
              loading="lazy"
              fill
            />
          </div>
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
          <div className={styles.imagecontainer}>
            <Image
              src="/p1.jpeg"
              className={styles.image}
              alt="image"
              loading="lazy"
              fill
            />
          </div>
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
          <div className={styles.imagecontainer}>
            <Image
              src="/p1.jpeg"
              className={styles.image}
              alt="image"
              loading="lazy"
              fill
            />
          </div>
          <div className={styles.textcontainer}>
            <span className={`${styles.category} ${styles.edtech}`}>
              Edtech
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum do</h3>
            <div className={styles.detail}>
              <span className={styles.userName}>Devloper</span>
              <span className={styles.date}> - 10.03.2024</span>
            </div>
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default Menu;
