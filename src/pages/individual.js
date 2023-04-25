import React from 'react'
import Footer from '../components/Footer'
import IndividualPage from '../components/IndividualPage'
import Navbar from '../components/Navbar'
import TripleC from '../components/TripleC'
import InfoSection from '../components/infoSection'
import { peopleObj1 } from '../components/infoSection/Data'
import GetStarted from '../components/GetStarted'

const Individual = () => {
  return (
    <div>
        <Navbar/>
        <IndividualPage/>
        <TripleC/>
        <InfoSection {...peopleObj1}/>
        <GetStarted/>
        <Footer/>
    </div>
  )
}

export default Individual