import React from 'react'
import NavbarPage from './components/Navbar'
import HeroPage from './components/Hero'
import ChoosePage from './components/Choose'
import ApproachPage from './components/Approach'
import OfferPage from './components/Offer'
import ScrollToTopButton from './components/STT'
import Accordion from './components/FAQS'
import TouchPage from './components/Touch'
import FooterPage from './components/Footer'

export default function Home() {
  return (
   <main>
    <NavbarPage/>
    <HeroPage/>
    <ChoosePage/>
    <ApproachPage/>
    <OfferPage/>
    <Accordion/>
    <TouchPage/>
    <FooterPage/>
    <ScrollToTopButton/>

    </main>
  )
}
