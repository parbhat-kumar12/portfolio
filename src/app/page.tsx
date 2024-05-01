import React from 'react'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import Works from './component/Works'
import Services from './component/Services'
import Skills from './component/Skills'
import Footer from './component/Footer'

const page = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Works/>
      <Services/>
      <Skills/>
      <Footer/>

    </>
  )
}

export default page
