import React from 'react'
import DemoRibbon from '../components/common/DemoRibbon'
import Navbar from '../components/common/Navbar'
import Hero from '../components/home/Hero'
import Welcome from '../components/home/Welcome'
import HowItWorks from '../components/home/HowItWorks'
import FindPartner from '../components/home/FindPartner'
import LatestBlog from '../components/home/LatestBlog'
import OurMembers from '../components/home/OurMembers'
import Footer from '../components/common/Footer'
import Stories from '../components/home/Stories'
import Testimonials from '../components/home/Testimonials' 
const Home = () => {
  return (
    <>
      <DemoRibbon/>
      <Navbar/>
      <Hero/>
      <Welcome/>
      <OurMembers/>
      <Testimonials/>
      <Stories/>
      <HowItWorks/>
      <LatestBlog/>
      <FindPartner/>
      <Footer/>
    </>
  )
}

export default Home
