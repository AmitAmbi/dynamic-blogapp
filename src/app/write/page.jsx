'use client'

import React, { useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <input placeholder="Title" type="text"  className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" width={16} height={16} alt="Add" loading="lazy" />
        </button>

        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="Add Image" width={16} height={16} loading="lazy" />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="Add Link" width={16} height={16} loading="lazy" />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="Add Video" width={16} height={16} loading="lazy" />
            </button>
          </div>
        )}

        <ReactQuill 
        className={styles.textarea}
          theme="bubble" 
          value={value} 
          onChange={setValue} 
          placeholder="Tell your own story..." 
        />
      </div>
      <button className={styles.publish}>publish</button>
    </div>
  );
};

export default WritePage;
