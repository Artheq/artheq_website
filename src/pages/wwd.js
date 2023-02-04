import React from 'react'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'
import HighEd from '../components/HighEd'
import Leader from '../components/LeaderSection'
import MiniSection from '../components/MiniSection'
import { wwdPageMini, wwdPageHi } from '../components/MiniSection/Data'
import Navbar from '../components/Navbar'
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
        <GetStarted/>
        <Footer/>
    </div>
  )
}

export default Wwd;