import React , {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import DropdownAbout from '../DropdownAbout'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,NavItem,NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80){
      setScrollNav(true)
    }
    else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  })

  const toggleHome = () =>{
    scroll.scrollToTop();
  }



  return (
    <>
      <Nav scrollNav={scrollNav}>
      <NavLogo to="/" onClick={toggleHome}>ARTHEQ</NavLogo>
        <NavbarContainer>
          
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks onClick={() => setOpenAbout((prev) => !prev)} on>About ARTH</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/why">Why ARTH</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/industry">For Industry</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/highereducation">For Higher-Ed</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/individual">For Individuals</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/download'>Download ARTH</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
        {
          openAbout && (
            <DropdownAbout/>
          )
        }
        
      </Nav>
    </>
  )
}

export default Navbar;