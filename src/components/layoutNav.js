import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './layout.module.scss'
import { useState } from 'react'

export default function LayoutNav() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [isActive, setIsActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setActiveMenu(!activeMenu);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Yohan Baes's Portfolio</title>
        <link rel="icon" href='/logowhite.ico' />
        <meta
          name="description"
          content="Visit my personal website portfolio."
        />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
        </style>
      </Head>
      <header className={`${styles.header} ${activeMenu ? styles.menuActive : ""}`}>
        <Link href="/" className={styles.logo}> 
          <Image
            priority
            src="/logo.png"
            height={80}
            width={80}
            alt='logo'
          />
        </Link>
        <div className={styles.button} onClick={handleClick}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
        <nav className={`${styles.nav} ${activeMenu ? styles.menuActive : ""}`}>
          <Link href="/" className={currentRoute === "/" ? styles.active : styles.nonActive}>About</Link>
          <Link href="/work" className={currentRoute === "/work" ? styles.active : styles.nonActive}>Work</Link>
          <Link href="/experience" className={currentRoute === "/experience" ? styles.active : styles.nonActive}>Experience</Link>
          <Link href="/contact" className={currentRoute === "/contact" ? styles.active : styles.nonActive}>Contact</Link>
        </nav>
      </header>
    </div>
  )
}