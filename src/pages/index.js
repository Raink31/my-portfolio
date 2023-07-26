import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import LayoutNav from '@/components/layoutNav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <LayoutNav />
      <Head>
        <title>Yohan Baes's Portfolio</title>
      </Head>
    </div>
  )
}
