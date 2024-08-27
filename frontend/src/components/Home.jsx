import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Feature from './Feature'
function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CategoryCarousel/>
         <LatestJobs/>
        <Feature/> 
       

    </div>
  )
}

export default Home