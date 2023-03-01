import React from 'react'
import Footer from '../components/Footer';
import GetStarted from '../components/GetStarted';
import InfoSection from '../components/infoSection';
import { purposeObj1, purposeObj2 } from '../components/infoSection/Data';
import Navbar from '../components/Navbar';
import PurposeMain from '../components/PurposePage';

const Purpose = () => {
  return (
    <div>
        <Navbar/>
        <PurposeMain/>
        <InfoSection {...purposeObj1}/>
        <InfoSection {...purposeObj2}/>
        <GetStarted/>
        <Footer/>

    </div>
  )
}

export default Purpose;