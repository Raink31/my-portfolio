import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from './layout.module.css'

export default function LayoutFooter() {
    return (
        <div className={styles.container}>
        <footer className={styles.footer}>
            <div className={styles.footerDescription}>
                <Image
                className={styles.logo}
                priority
                src="/logoYB.png"
                height={80}
                width={80}
                alt='logo'
                />
                <p>Hello, I'm Yohan a self-taught & junior frontend developer. This is my first personal project and blog.</p>
            </div>
            <div className={styles.siteNav}>
                <h2>Blog</h2>
                <ul>
                    <li>Article 1</li>
                    <li>Article 2</li>
                    <li>Article 3</li>
                    <li>Article 4</li>
                </ul>
            </div>
            <div className={styles.siteNav}>
                <h2>Art</h2>
                <ul>
                    <li>Art 1</li>
                    <li>Art 2</li>
                    <li>Art 3</li>
                    <li>Art 4</li>
                </ul>
            </div>
            <div className={styles.siteNav}>
                <h2>Work</h2>
                <ul>
                    <li>Work 1</li>
                    <li>Work 2</li>
                    <li>Work 3</li>
                    <li>Work 4</li>
                </ul>
            </div>
            <div className={styles.socials}>
                <h2>Get in touch!</h2>
                <p>You have a question ? Contact me!</p>
                <div className={styles.socialsLinks}>
                    <Image
                    className={styles.links}
                    priority
                    src="/twitterlogo.png"
                    height={32}
                    width={32}
                    alt='twitter link'
                    />
                    <Image
                    className={styles.links}
                    priority
                    src="/linkedinlogo.png"
                    height={32}
                    width={32}
                    alt='linkedin link'
                    />
                    <Image
                    className={styles.links}
                    priority
                    src="/mailtologo.png"
                    height={32}
                    width={32}
                    alt='mailto link'
                    />
                </div>
            </div>
        </footer>
        </div>
    )
}