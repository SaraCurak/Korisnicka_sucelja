import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2'
import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import Cover from '../components/Cover'
import Steps from '../components/Steps'

const inter = Inter({ subsets: ['latin'] })

export default function Uputstva() {
  return (
    <div className>
      <Head>
        <title>Uputstva</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Navbar2 />
      <Steps />
      <Footer2 />
      <Footer />
    </div>
  )
}
