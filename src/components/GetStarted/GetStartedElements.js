import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const GetStartedContainer = styled.div`
    height:250px;
    background-color:#f9f9f9;
    display:flex;
    align-items:center;
`

export const TextContainer = styled.div`
display:grid;
width:50%;
justify-content:end;
`

export const Heading = styled.h1`
    color:#0E74E6;
    font-size:3.2rem;
    font-family:"Roboto";
    font-weight:normal;
    
`

export const SubHeading = styled.p`
    font-size:1.4rem;
    color:#545454;
`

export const BtnWrap = styled.div`
    border-radius:6px;
    background:#0E74E6;
    white-space: nowrap;
    padding: 13px 30px;
    color: white;
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
export const BtnTxt = styled.p`
    font-size:1.5rem;
`
export const ButtonContainer = styled.div`
    display:flex;
    justify-content:center;
    width:50%;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 2px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 2px;
    font-size: 20px;
`
