import React from 'react'
import Footer from '../components/Footer'
import Leader from '../components/LeaderSection'
import MiniSection from '../components/MiniSection'
import { homePageMini, wwdPageMini } from '../components/MiniSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/services'
import WhatSection from '../components/WhatSection'

const Wwd = () => {
  return (
    <div>
        <Navbar />
        <WhatSection/>
        <MiniSection {...wwdPageMini}/>
        <Leader/>
        <Footer/>
    </div>
  )
}

export default Wwd;