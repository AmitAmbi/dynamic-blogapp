"use client";

import React, { useContext } from "react";
import styles from "./theme.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={styles.container} onClick={toggle}
    
    style={
      theme === "dark"
        ? {  background: "#fff" }
        : { background: "#000" }
    }>
      <Image src="/moon.png" width={14} height={14} alt="moon" priority />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#000" }
            : { right: 1, backgroundColor: "#fff" }
        }
      ></div>
      <Image src="/sun.png" width={14} height={14} alt="moon" priority />
    </div>
  );
};

export default ThemeToggle;
{
}
