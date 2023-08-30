import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Instructors from '../components/Instructors'

const inter = Inter({ subsets: ['latin'] })

export default function Instruktori() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Instruktori</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Instructors />
      <Footer />
    </div>
  )
}