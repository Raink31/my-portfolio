import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './layout.module.css'

export default function LayoutNav() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.container}>
      <Head>
        <title>Yohan Baes's Portfolio</title>
        <link rel="icon" href='/logowhite.ico' />
        <meta
          name="description"
          content="Visit my personal website portfolio."
        />
      </Head>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}> 
          <Image
            priority
            src="/logo.png"
            height={80}
            width={80}
            alt='logo'
          />
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={currentRoute === "/" ? styles.active : styles.nonActive}>About</Link>
          <Link href="/work" className={currentRoute === "/work" ? styles.active : styles.nonActive}>Work</Link>
          <Link href="/experience" className={currentRoute === "/experience" ? styles.active : styles.nonActive}>Experience</Link>
          <Link href="/contact" className={currentRoute === "/contact" ? styles.active : styles.nonActive}>Contact</Link>
        </nav>
      </header>
    </div>
  )
}