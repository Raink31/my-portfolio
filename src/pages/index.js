import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import LayoutNav from '@/components/layoutNav'
import LayoutFooter from '@/components/layoutFooter'
import homeStyles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Yohan Baes's Portfolio</title>
      </Head>
      <LayoutNav />
      <main className={homeStyles.main}>
        <div className={homeStyles.presentation}>
          <h1>{`<Frontend Developer />`}</h1>
          <p>Hi there! My name is <stron>Yohan</stron>, I am a self-taught developer based in France, and I like to create beautiful interfaces with excellent usability.</p>
          <br />
          <p>Here, you'll find my <strong>work</strong>, my <strong>blog</strong>, and some of my <strong>CSS Art</strong>.</p>
        </div>
        <Image
          className={homeStyles.yohan}
          priority
          src="/yohanPhoto.png"
          height={460}
          width={460}
          alt='mailto link'
        />
      </main>
      <LayoutFooter />
    </div>
  )
}
