import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import AOS from 'aos'
import Navbar from '../components/organisms/Navbar'
import MainBanner from '../components/organisms/MainBanner'
import TransactionState from '../components/organisms/TransactionState'
import FeaturedGame from '../components/organisms/FeaturedGame'
import Reached from '../components/organisms/Reached'
import Stories from '../components/organisms/Stories'
import Footer from '../components/organisms/Footer'

export default function Home(){

useEffect(() => {
    AOS.init();
}, []);

return (
    <>
        {/* Navbar */}
        <Head>
            <title>StoreGG - Get a new experience</title>
            <meta name="description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
            <meta property="og:title" content="StoreGG - Get a new experience" />
            <meta property="og:description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
        </Head>
        <Navbar/>
        <MainBanner />
        <TransactionState />
        <FeaturedGame />
        <Reached />
        <Stories />
        <Footer />
    </>
    )
}

