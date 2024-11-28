"use client"
import React, { useState } from "react";
import styles from "./AuthLinks.module.css";
import Link from "next/link";

const Auth = () => {
  const [open, setOpen] = useState(false);
  const status = "Authnicated";
  return (
    <>
      {status === "notAuthnicated" ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span>Logout</span>
        </>
      )}
<div className={styles.burger} onClick={()=> setOpen(!open)}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      </div>
      {open && (

        <div className={styles.responsiveMenu}>

          <Link href="/">HomePage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notAuthnicated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span>Logout</span>
        </>
      )}
        </div>
      )}
    </>
  );
};

export default Auth;
