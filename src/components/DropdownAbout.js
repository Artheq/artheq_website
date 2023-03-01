import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

const DropdownAbout = () => {
    
  return (
    <div className='flex flex-col dropDownProfile'>
        <ul className='listInstructions'>
          <Link to='/purpose' style={{textDecoration:'none'}}><li className='items1'>Purpose & Mission</li></Link>  
          <Link to='/download' style={{textDecoration:'none'}}><li className='items2'>Team</li></Link>
          <Link to='/history' style={{textDecoration:'none'}}><li className='items3'>History</li></Link>
        </ul>
    </div>
    
    
  )
}


export default DropdownAbout;