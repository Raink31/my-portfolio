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
      <LayoutNav />
      <main className={homeStyles.main}>
        <h1>Contact</h1>
      </main>
    </div>
  )
}