import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Navbar2 from '../components/Navbar2'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Footer2 from '../components/Footer2'
import Instructors from '../components/Instructors'
import Instructors2 from '../components/Instructors2'

const inter = Inter({ subsets: ['latin'] })

export default function Instruktori() {
  return (
    <div className>
      <Head>
        <title>Instruktori</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"Home"} />
      <Navbar2 />
      <Instructors />
     
      <Footer2 />
      <Footer />

    </div>
  )
}
