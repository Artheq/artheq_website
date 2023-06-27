import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,FooterLink, SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights } from './FooterElements'

const Footer = () => {
  return (
    <>
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Legal</FooterLinkTitle>
                            {/* <FooterLink to="/contactus">Contact Us</FooterLink> */}
                            <FooterLink to="/privacy">Privacy Policy</FooterLink>
                            <FooterLink to="/terms">Terms of Service</FooterLink>
                            <FooterLink to="/cookies">Cookies Policy</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>At Arth</FooterLinkTitle>
                            <FooterLink to="/contactus">Contact Us</FooterLink>
                            {/* <FooterLink to="/contactus">Privacy Policy</FooterLink>
                            <FooterLink to="/contactus">Terms of Service</FooterLink> */}
                            <FooterLink to="/contactus">About Us</FooterLink>
                            <FooterLink to="/admin">Admin</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    {/* <FooterLinkItems> */}
                        {/* <FooterLinkTitle>Arth</FooterLinkTitle>
                            <FooterLink to="/contactus">Contact Us</FooterLink>
                            <FooterLink to="/contactus">Privacy Policy</FooterLink>
                            <FooterLink to="/contactus">Terms of Service</FooterLink>
                            <FooterLink to="/contactus">About Us</FooterLink> */}
                    {/* </FooterLinkItems> */}
                    {/* <FooterLinkItems>
                        <FooterLinkTitle>Arth</FooterLinkTitle>
                            <FooterLink to="/contactus">Contact Us</FooterLink>
                            <FooterLink to="/contactus">Privacy Policy</FooterLink>
                            <FooterLink to="/contactus">Terms of Service</FooterLink>
                            <FooterLink to="/contactus">About Us</FooterLink>
                    </FooterLinkItems> */}
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>ARTH</SocialLogo>
                    <WebsiteRights>ARTH © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    </>
  )
}

export default Footer