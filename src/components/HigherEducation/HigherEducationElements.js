import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const HigherEducationContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    height:900px;
`

export const HigherBg = styled.div`
    position:absolute;
    display:flex;
    width:100%;
    height:100%;
    overflow: hidden;
    align-items:center;
    justify-content:flex-end;
    padding:60px;

`

export const ImgBg = styled.img`
    width: 60%;
    height: 70%;
    -o-object-fit:cover;
    object-fit:cover;
    object-position:50% 0%;
    border-radius:10px;

`

export const HigherContent = styled.div`
    border-radius: 8px;
    width:600px;
    z-index:3;
    justify-content:center;
    position:absolute;
    height:350px;
    display:flex;
    flex-direction:column;
    padding-left:40px;

`
export const HigherH1 = styled.h1`
    color: black;
    font-family:'Lato';
    font-weight: bold;
    font-size: 50px;
    text-align:left;    
    text-shadow: #f1f1f1 1px 1px 1px;



    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HigherP = styled.p`
     margin-top:26px;
    color: black;
    font-family:"Lato";
    font-size: 24px;
    margin-left:4px;
    text-align:left;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HigherBgPanel = styled.div`
    width: 60px;
    height:10px;
    background-color:#0E74E6;
    margin-bottom:10px;
    border-radius:2px;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

export const HigherBtnWrapper = styled.div`
    margin-top: 32px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`