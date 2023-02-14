import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const IndividualContainer = styled.div`
     background: #f9f9f9;
    display: flex;
    align-items:center;
    padding: 0 180px;
    height: 1050px;
    position:relative;
    z-index: 1;

  
`

export const IndividualBg = styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow: hidden;
`

export const ImgBg = styled.img`
    width:100%;
    height:100%;
    -o-object-fit:cover;
    object-fit: cover;
    object-position: 50% 0%;
`

export const IndividualContent = styled.div`
    border-radius: 8px;
    z-index:3;
    max-width: 1600px;
    justify-content:center;
    position:absolute;
    height:300px;
    display:flex;
    align-items:flex-end;
    flex-direction:column;
    width:100%;
    padding-right:400px;

`

export const IndividualH1 = styled.h1`
    color: black;
    font-family:'Lato';
    font-weight: bold;
    font-size: 60px;
    text-align:right;    
    text-shadow: #f1f1f1 1px 1px 1px;



    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const IndividualP = styled.p`
    margin-top:46px;
    color: black;
    font-family:"Lato";
    font-size: 18px;
    text-align:right;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const IndividualBtnWrapper = styled.div`
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