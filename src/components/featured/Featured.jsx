import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey Oggy is Here,</b> Discover my stories and Creative Ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgcontainer} >
          <Image src="/p1.jpeg" fill alt="banner" className={styles.image} />
        </div>
        <div className={styles.textcontainer}>
          <h1 className={styles.postTitle}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            consequuntur quae hic molestias!
          </h1>
          <p className={styles.postDes}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            maiores pariatur, est optio dicta minima tempora ipsa molestias rem
            ut suscipit nulla doloribus repellendus provident laboriosam, harum
            velit, sapiente libero.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
