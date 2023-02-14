import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const IndustryContainer = styled.div`
     background: #f9f9f9;
    display: flex;
    align-items:center;
    padding: 0 180px;
    height: 1050px;
    position:relative;
    z-index: 1;

    :before {
        content:' ';
        position:absolute;
        top:0;
        bottom:0;
        right:0;
        left:0;
        z-index: 2;
    }
`
export const IndustryImgCont = styled.div`
    width:100%;
    display: flex;
    justify-content:center;
    align-items:center;
`

export const ImgBg = styled.img`
    width: 90%;
    height: 75%;
    -o-object-fit:cover;
    object-fit:cover;
    object-position:50% 0%;
    border-radius:6px;

`

export const IndustryBg = styled.div`
    position:absolute;
    display:flex;
    width:100%;
    height:100%;
    overflow: hidden;
    align-items:center;
    justify-content:center;
`
export const HeroH1 = styled.h1`
    color: black;
    font-family:'Lato';
    font-weight: bold;
    font-size: 40px;
    text-align:left;    
    text-shadow: #f1f1f1 1px 1px 1px;



    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top:26px;
    color: black;
    font-family:"Lato";
    font-size: 18px;
    text-align:left;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const IndustriesContent = styled.div`
    /* background-color:white; */
    border-radius: 8px;
     z-index:3;
    max-width: 1600px;
    justify-content:center;
    position:absolute;
    height:300px;
    display:flex;
    flex-direction:column;

`
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`