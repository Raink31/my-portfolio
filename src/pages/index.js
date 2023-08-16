import Image from 'next/image'
import {useEffect, useState, useRef} from 'react';
import gsap from 'gsap';

import LayoutNav from '@/components/layoutNav'
import homeStyles from '@/styles/Home.module.css'


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    setIsVisible(true);
    requestAnimationFrame(animation);
  }, []);

  const Slider = () => {
    return (
      <section className={homeStyles.sliderContainer}>
        <div className={homeStyles.slider}>
          <p ref={firstText}>Available for work - Available for work - Available for work - Available for work -</p>
          <p ref={secondText}>Available for work - Available for work - Available for work - Available for work -</p>
        </div>
      </section>
    )
  }

  const animation = () => {
    if (xPercent <= -101) {
      xPercent = 0
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    xPercent += 0.05 * direction;
    requestAnimationFrame(animation);
  }

  return (
    <div className={`${homeStyles.container}`}>
      <LayoutNav />
      <main className={`${homeStyles.main} ${isVisible && homeStyles.visible}`}>
        <Slider />
        <section className={homeStyles.section1}>
          <Image
            onContextMenu={(e) => e.preventDefault()}
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