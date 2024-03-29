import styled from "styled-components"
import {Link as LinkR} from 'react-router-dom';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#f9f9f9' : 'transparent')};
    height: 80px;
    margin-top:-80px;
    display:flex;
    justify-content: center;
    align-items:center;
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index: 10;
;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display:flex;
    justify-content: flex-end;
    height: 70px;
    z-index: 1;
    width: 100%;
    padding: 0 0px; 
    max-width: 1450px;
`;

export const NavLogo = styled(LinkR)`
    font-family:"Lato", sans-serif;
    color: ${({scrollNav}) => (scrollNav ? 'black' : 'white')};
    justify-self:flex-start;
    font-size: 2.1rem;
    display: flex;
    align-items:center;
    margin-left:24px;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

`;

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size:1.8rem;
        cursor:pointer;
        color: black;
    }
`
export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style: none;
    text-align:center;

    @media screen and (max-width: 768px){
        display:none
    }
`
export const NavItem = styled.li`
    height: 80px;

`

export const NavLinks = styled(LinkR)`
    color: ${({scrollNav}) => (scrollNav ? 'black' : 'white')};
    display: flex;
    align-items:center;
    text-decoration:none;
    font-size:1.2rem;
    padding: 0 1.2rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        border-top: 4px solid #0E74E6;
        transition: 0.3s ease-out;

    }

`

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;
    margin-left:30px;

    @media screen and (max-width: 768px){
        display:none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius:5px;
    background:#0E74E6;
    white-space: nowrap;
    padding: 13px 16px;
    color: white;
    font-size: 19px;
    outline: none;
    border:none;
    font-weight:bold;
    letter-spacing:0.5px;
    font-family:"Heebo";
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #005BC1;
        color:  white;
    }
`

