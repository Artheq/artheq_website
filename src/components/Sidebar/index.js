import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SideBarLink, SideBtnWrap, SidebarRoute, SidebarMenu } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>

                <SideBarLink to='/who' onClick={toggle}>
                    About
                </SideBarLink>
                <SideBarLink to='wwd' onClick={toggle}>
                    What We Do
                </SideBarLink>
                <SideBarLink to='services' onClick={toggle}>
                    Services
                </SideBarLink>
                <SideBarLink to='privacy' onClick={toggle}>
                    Privacy Policy
                </SideBarLink>

            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/contact'>Contact Us</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar