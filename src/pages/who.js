import React from 'react'
import History from '../components/History';
import Navbar from '../components/Navbar';
import Team from '../components/Team';
import WhoPage from '../components/WhoPage';
import Footer from '../components/Footer';


const Who = () => {
  return (
    <div>
        <Navbar />
        <WhoPage />
        <Team/>
        <History/>
        <Footer/>
    </div>
  )
}

export default Who;