import React from 'react'
import DemoRibbon from '../Components/common/DemoRibbon'
import Navbar from '../Components/common/Navbar'
import Hero from '../Components/home/Hero'
import Welcome from '../Components/home/Welcome'
import HowItWorks from '../Components/home/HowItWorks'
import FindPartner from '../Components/home/FindPartner'
import LatestBlog from '../Components/home/LatestBlog'
import OurMembers from '../Components/home/OurMembers'
import Footer from '../Components/common/Footer'
import Stories from '../Components/home/Stories'
import Testimonials from '../Components/home/Testimonials'
const Home = () => {
  return (
    <>
      <DemoRibbon/>
      <Navbar/>
      <Hero/>
      <Welcome/>
      <OurMembers/>
      <Stories/>
      <HowItWorks/>
      <LatestBlog/>
      <FindPartner/>
      <Footer/>
    </>
  )
}

export default Home
