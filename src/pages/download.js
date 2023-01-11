import React from 'react'
import Download from '../components/Download'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const download = ({setIsOpen, isOpen}) => {

  const toggle = () => {
    setIsOpen(!isOpen)
}

  return (
    <div>
    <Navbar toggle={toggle}/>
    <Download/>
    <Footer/>
    </div>
  )
}

export default download;