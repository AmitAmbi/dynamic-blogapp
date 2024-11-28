import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>

        <div className={styles.logo}>

          <Image src="/logo.png" width={50} height={50} alt='logo' loading='lazy'/>
          <h1 className={styles.logoText}>Blog</h1>
        </div>
<p className={styles.des}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum odio harum eveniet laudantium autem eius beatae, fugiat ducimus iure ipsa voluptas earum, ullam praesentium nesciunt necessitatibus in eligendi vero?\</p>

<div className={styles.icons}>
<Image src="/facebook.png" height={18} width={18} loading='lazy' alt='facebook'/>
<Image src="/instagram.png" height={18} width={18} loading='lazy' alt='facebook'/>
<Image src="/tiktok.png" height={18} width={18} loading='lazy' alt='facebook'/>
<Image src="/youtube.png" height={18} width={18} loading='lazy' alt='facebook'/>
</div>

      </div>
      <div className={styles.links}>
<div className={styles.list}>
<span className={styles.listTitle}>Links</span>
<Link href="/">HomePage</Link>
<Link href="/">Blog</Link>
<Link href="/">About US</Link>
<Link href="/">Contact</Link>
</div>

<div className={styles.list}>
<span className={styles.listTitle}>tags</span>
<Link href="/">Style</Link>
<Link href="/">Edtech</Link>
<Link href="/">Food</Link>
<Link href="/">Sports</Link>
</div>


<div className={styles.list}>
<span className={styles.listTitle}>Socail</span>
<Link href="/">Facebook</Link>
<Link href="/">Insagram</Link>
<Link href="/">Youtube</Link>
<Link href="/">TikTok</Link>
</div>

      </div>
    </div>
  )
}

export default Footer
