import React from 'react'
import Footer from '../components/Footer'
import Leader from '../components/LeaderSection'
import MiniSection from '../components/MiniSection'
import { homePageMini, wwdPageMini } from '../components/MiniSection/Data'
import Navbar from '../components/Navbar'
import ServicesMenus from '../components/ServicesMenus'
import WhatSection from '../components/WhatSection'

const Wwd = () => {
  return (
    <div>
        <Navbar />
        <WhatSection/>
        <ServicesMenus/>
        <MiniSection {...wwdPageMini}/>
        <Leader/>
        <Footer/>
    </div>
  )
}

export default Wwd;