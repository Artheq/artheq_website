import React from 'react'
import Footer from '../components/Footer'
import IndustryMain from '../components/Industries'
import InfoSection2 from '../components/infoSection2'
import Navbar from '../components/Navbar'
import NavbarHero from '../components/NavbarHero'
import { purposeSec2 } from '../components/infoSection2/data2';


const Industry = ({toggle}) => {
  return (
    <div>
        <NavbarHero toggle={toggle}/>
        <IndustryMain/>

        <InfoSection2 {...purposeSec2}/>
        <Footer/>

    </div>
  )
}

export default Industry