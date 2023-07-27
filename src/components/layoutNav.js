import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from './layout.module.css'

export default function LayoutNav() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href='/logo.ico' />
        <meta
          name="description"
          content="Visit my personal website portfolio."
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
        </style>
      </Head>
      <header className={styles.header}>
        <Image
          className={styles.logo}
          priority
          src="/logoYB.png"
          height={60}
          width={60}
          alt='logo'
        />
        <nav className={styles.nav}>
          <Link href="./pages/index.js">Home</Link>
          <Link href="./pages/index.js">Blog</Link>
          <Link href="./pages/index.js">Art</Link>
          <Link href="./pages/index.js">Work</Link>
        </nav>
      </header>
    </div>
  )
}