import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from '../components/infoSection/Data';
// import MiniSection from '../components/MiniSection';
// import { homePageMini } from '../components/MiniSection/Data';
import NavbarHero from '../components/NavbarHero';
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <NavbarHero toggle={toggle}/>
    <HeroSection />
    <InfoSection {...homeObjOne}/>
    {/* <MiniSection {...homePageMini}/> */}
    <InfoSection {...homeObjTwo}/>
    <InfoSection {...homeObjThree}/>
    <InfoSection {...homeObjFour}/>
    <Footer/>
    </>
  )
}

export default Home