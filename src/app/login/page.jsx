"use client";
import styles from "./login.module.css";
import {signIn, useSession } from "next-auth/react";

function LoginPage() {
  const { data, status } = useSession();
  console.log(data, status);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socailButton} onClick={() => signIn("google")}>
          sign in with Google
        </div>
        <div className={styles.socailButton}>sign in with GitHub</div>
        <div className={styles.socailButton}>sign in with Facebook</div>
      </div>
    </div>
  );
}

export default LoginPage;
