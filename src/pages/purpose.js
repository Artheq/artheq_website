import React from 'react'
import DoubleC from '../components/AboutFolder/DoubleC';
import MissionPage from '../components/AboutFolder/MissionPage';
import TeamPage from '../components/AboutFolder/TeamPage/Index';
import Footer from '../components/Footer';
import GetStarted from '../components/GetStarted';
import InfoSection from '../components/infoSection';
import { purposeObj1, purposeObj2 } from '../components/infoSection/Data';
import InfoSection2 from '../components/infoSection2';
import { purposeSec1 } from '../components/infoSection2/data2';
import Navbar from '../components/Navbar';

const Purpose = () => {
  return (
    <div>
        <Navbar/>
        <InfoSection2 {...purposeSec1}/>
        <TeamPage/>
        <DoubleC/>

        {/* <InfoSection {...purposeObj1}/>
        <InfoSection {...purposeObj2}/> */}
        <GetStarted/>
        <Footer/>

    </div>
  )
}

export default Purpose;