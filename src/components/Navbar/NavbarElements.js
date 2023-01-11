import styled from "styled-components"
import {Link as LinkR} from 'react-router-dom';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'red' : 'red')};
    height: 75px;
    margin-top: -80px;
    display:flex;
    justify-content: center;
    align-items:center;
    font-size: 1rem;
    box-shadow:0px 0px 4px rgba(128,128,128, 0.35) ;
    position: sticky;
    top:0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height: 70px;
    z-index: 1;
    width: 100%;
    padding: 0 0px; 
    max-width: 1300px;
`;

export const NavLogo = styled(LinkR)`
    font-family:"Work Sans", sans-serif;
    color: black;
    justify-self:flex-start;
    font-size: 1.8rem;
    display: flex;
    align-items:center;
    margin-left:24px;
    text-decoration: none;
    cursor: pointer;
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
    color: black;
    display: flex;
    align-items:center;
    text-decoration:none;
    font-size:18px;
    padding: 0 1.5rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid red;
    }

`

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;

    @media screen and (max-width: 768px){
        display:none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius:50px;
    background:#0E74E6;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 17px;
    outline: none;
    border:none;
    font-weight:bold;
    letter-spacing:0.5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #005BC1;
        color:  white;
    }
`

