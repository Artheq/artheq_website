import React from 'react'
import Footer from '../components/Footer'
import HighEd from '../components/HighEd'
import Leader from '../components/LeaderSection'
import MiniSection from '../components/MiniSection'
import { homePageMini, wwdPageMini, wwdPageHi } from '../components/MiniSection/Data'
import Navbar from '../components/Navbar'
import ServicesMenus from '../components/ServicesMenus'
import WhatSection from '../components/WhatSection'

const Wwd = () => {
  return (
    <div>
        <Navbar />
        <WhatSection/>
        <MiniSection {...wwdPageMini}/>
        <Leader/>
        <MiniSection {...wwdPageHi}/>
        <HighEd/>
        <Footer/>
    </div>
  )
}

export default Wwd;