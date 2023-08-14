import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useEffect, useState} from 'react';

import LayoutNav from '@/components/layoutNav'
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
        <section className={homeStyles.section1}>
          <Image
            className={homeStyles.yohanPhoto}
            priority
            src="/yohan.png"
            height={460}
            width={460}
            alt="Yohan's Photo"
          />
          <h1 className={homeStyles.h1}>
            FRONTEND
            <br />
            <span>DEVELOPER</span>
          </h1>
          <p className={homeStyles.myDescription}>
            Hi there ! My name is <a href="https://github.com/Raink31" target='_blank'>Yohan</a>👋
            I’m a self-taught developer based in France, and Ilike to create beautiful interfaces with excellent usability. 
            You can contact me on <a href="https://twitter.com/Yobai_Dev" target='_blank'>Twitter</a>🐤 and
            on <a href='https://www.linkedin.com/in/yohan-baes-a8a219176/' target='_blank'>LinkedIn</a>🏢.
          </p>
        </section>
      </main>
    </div>
  )
}