import React from 'react'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'
import InfoSection from '../components/infoSection'
import { historyObj1 } from '../components/infoSection/Data'
import MiniSection from '../components/MiniSection'
import Navbar from '../components/Navbar'

const History = () => {
  return (
    <div>
        <Navbar/>
        <MiniSection/>
        <MiniSection/>
        <MiniSection/>

        <MiniSection />
        <MiniSection/>

        <InfoSection {...historyObj1}/>
        <MiniSection/>
        <GetStarted/>
        <Footer/>
    </div>
  )
}

export default History