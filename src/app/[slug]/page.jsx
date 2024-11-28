import React from "react";
import styles from "./SinglePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.contiener}>
      <div className={styles.infoContiener}>
        <div className={styles.textContiener}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. t
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContiener}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContiener}>
              <span className={styles.userName}>Oggy A</span>
              <span className={styles.date}>08-07-2000</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContiener}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
        <div className={styles.Des}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            fugiat itaque et dolores fugit consectetur culpa alias, commodi
            natus rem reprehenderit quis molestiae facilis vel? Sapiente autem
            consequuntur eligendi? Maxime.
          </p>
<h2>lorem is here</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            fugiat itaque et dolores fugit consectetur culpa alias, commodi
            natus rem reprehenderit quis molestiae facilis vel? Sapiente autem
            consequuntur eligendi? Maxime.
          </p>


          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            fugiat itaque et dolores fugit consectetur culpa alias, commodi
            natus rem reprehenderit quis molestiae facilis vel? Sapiente autem
            consequuntur eligendi? Maxime.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            fugiat itaque et dolores fugit consectetur culpa alias, commodi
            natus rem reprehenderit quis molestiae facilis vel? Sapiente autem
            consequuntur eligendi? Maxime.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            fugiat itaque et dolores fugit consectetur culpa alias, commodi
            natus rem reprehenderit quis molestiae facilis vel? Sapiente autem
            consequuntur eligendi? Maxime.
          </p>

          </div>
          <div className={styles.Comments}>
            <Comments/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
