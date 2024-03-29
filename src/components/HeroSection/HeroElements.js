import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: black;
    display: flex;
    padding-top:200px;
    align-items:center;
    height: 970px;
    position:relative;
    z-index: 1;
    justify-content:flex-start ;

    :before {
        position:absolute;
        top:0;
        bottom:0;
        right:0;
        left:0;
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow: hidden;
`

export const VideoBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit:cover;
    object-fit:cover;
    object-position:0% 0%;


`

export const HeroContent = styled.div`
    z-index:3;
    max-width: 1200px;
    margin-left:50px;
    position:absolute;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
`
export const HeroH1 = styled.h1`
    color: white;
    text-shadow: #818181 .7px .7px 0.3px;
    font-family:'Lato';
    font-size: 66px;
    text-align:left;


    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top:24px;
    color: white;
    font-family:'Lato';

    font-size: 24px;
    text-shadow: #818181 0.7px 0.7px 0.3px;
    padding-left:2px;
    text-align:right;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`