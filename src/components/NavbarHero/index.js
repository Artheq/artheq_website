import React , {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import DropdownAbout from '../DropdownAbout'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,NavItem,NavLinks, NavBtn, NavBtnLink} from './NHeroElements'

const NavbarHero = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 900){
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
      <NavLogo scrollNav={scrollNav} to="/" onClick={toggleHome}>ARTHEQ</NavLogo>
        <NavbarContainer>
          
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks scrollNav={scrollNav} onClick={() => setOpenAbout((prev) => !prev)} on>About ARTH</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks scrollNav={scrollNav} to="/why">Why ARTH</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks scrollNav={scrollNav} to="/industry">For Industry</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks scrollNav={scrollNav} to="/highereducation">For Higher-Ed</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks scrollNav={scrollNav} to="/individual">For Individuals</NavLinks>
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

export default NavbarHero;