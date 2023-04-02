import styled from "styled-components";

export const DoubleContainer = styled.div`
    background-color:#f6f6f6;
    height:700px;
    display: grid;
    align-items:center;
`

export const ColumnHolder = styled.div`
    height:550px;
    display:flex;
    justify-content:space-evenly;
`

export const ColumnOne = styled.div`
    border-radius:15px;
    height:100%;
    width:350px;
    box-shadow:0px 0px 6px rgba(128,128,128, 0.35) ;

`

export const ColumnTwo = styled.div`
    background-color: #f9f9f9;
    border-radius:15px;
    height:100%;
    width:350px;
    box-shadow:0px 0px 6px rgba(128,128,128, 0.35) ;
`
export const Img = styled.img`
    border-top-left-radius:15px;
    border-top-right-radius:15px;
    width:100%;
    height:70%;
    object-fit:cover;
    object-position: 50% 50%;

`
export const Img2 = styled.img`
    border-top-left-radius:15px;
    border-top-right-radius:15px;
    width:100%;
    height:70%;
    object-fit:cover;
    object-position: 50% 0%;

`


export const Title = styled.h1`
    font-family:"Lato";
    text-align:center;
    margin-bottom:10px;

`

export const Subtitle = styled.p`
    font-family:"Lato";
    text-align:center;
    font-size:20px;


`