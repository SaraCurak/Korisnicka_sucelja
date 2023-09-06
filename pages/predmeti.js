import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Bundle  from '../components/Bundle'

const inter = Inter({ subsets: ['latin'] })

export default function Predmeti() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Predmeti</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Bundle />
      <Footer />
    </div>
  )
}
