import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';

import LayoutNav from '@/components/layoutNav'
import LayoutFooter from '@/components/layoutFooter'
import homeStyles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)
  }, []);

  return (
    <div className={`${homeStyles.container}`}>
      <LayoutNav />
      <main className={`${homeStyles.main} ${isVisible && homeStyles.visible}`}>
        <h1>Experience</h1>
      </main>
    </div>
  )
}