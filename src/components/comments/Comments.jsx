import React from "react";
import styles from "./Comments.module.css";
import Link from "next/link";
import Image from "next/image";
const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Commnets</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write comment......"
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login"> Login to write comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              loading="lazy"
              width={50}
              height={50}
              className={styles.Image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}> Motu </span>
              <span className={styles.Date}>01-02-2024</span>
            </div>
          </div>
          <p className={styles.Des}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laboriosam, dolorem ullam voluptates vitae vel, numquam impedit
            explicabo quisquam accusantium expedita delectus amet aut libero.
            Veniam ratione culpa minima eligendi optio!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              loading="lazy"
              width={50}
              height={50}
              className={styles.Image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}> Motu </span>
              <span className={styles.Date}>01-02-2024</span>
            </div>
          </div>
          <p className={styles.Des}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laboriosam, dolorem ullam voluptates vitae vel, numquam impedit
            explicabo quisquam accusantium expedita delectus amet aut libero.
            Veniam ratione culpa minima eligendi optio!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              loading="lazy"
              width={50}
              height={50}
              className={styles.Image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}> Motu </span>
              <span className={styles.Date}>01-02-2024</span>
            </div>
          </div>
          <p className={styles.Des}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laboriosam, dolorem ullam voluptates vitae vel, numquam impedit
            explicabo quisquam accusantium expedita delectus amet aut libero.
            Veniam ratione culpa minima eligendi optio!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              loading="lazy"
              width={50}
              height={50}
              className={styles.Image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}> Motu </span>
              <span className={styles.Date}>01-02-2024</span>
            </div>
          </div>
          <p className={styles.Des}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laboriosam, dolorem ullam voluptates vitae vel, numquam impedit
            explicabo quisquam accusantium expedita delectus amet aut libero.
            Veniam ratione culpa minima eligendi optio!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              loading="lazy"
              width={50}
              height={50}
              className={styles.Image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}> Motu </span>
              <span className={styles.Date}>01-02-2024</span>
            </div>
          </div>
          <p className={styles.Des}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laboriosam, dolorem ullam voluptates vitae vel, numquam impedit
            explicabo quisquam accusantium expedita delectus amet aut libero.
            Veniam ratione culpa minima eligendi optio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
