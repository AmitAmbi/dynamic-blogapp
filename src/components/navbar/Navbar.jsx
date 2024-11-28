import React from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToogle/ThemeToggle'
import Auth from '../AuthLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}> 


<div className={styles.socail}>

<Image src="/facebook.png" width={24}height={24} priority alt='facebook'/>
  <Image src="/youtube.png" width={24}height={24} priority alt='facebook'/>
  <Image src="/instagram.png" width={24}height={24} priority alt='facebook'/>
  <Image src="/tiktok.png" width={24}height={24} priority alt='facebook'/>


</div>

<div className={styles.logo}>Blog</div>
<div className={styles.links}>
<ThemeToggle/>

  <Link href="/" className={styles.link}>Homepage</Link>
  <Link href="/" className={styles.link}>Contect</Link>  
  <Link href="/" className={styles.link}>About</Link> 
  <Auth/>
</div>

   
    </div>

  )
}

export default Navbar
