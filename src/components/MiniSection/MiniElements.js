import styled from "styled-components";

export const MiniContainer = styled.div`
    display:flex;
    height:40px;
    background-color:#f9f9f9;
    align-items:center;
    justify-content:center;

    @media screen and (max-width: 768px) {
        height:650px;
        
    }

`
export const MiniColumn = styled.div`
    margin-top:80px;

    display:column;
    align-content:center;
    justify-content:center;
   
`

export const Header = styled.h1`
    color:black;
    font-size:2.5rem;

    @media screen and (max-width: 768px) {
        text-align:center;        
    }
  
`
export const Body = styled.p`
    color:#0E74E6;
    font-size:1.2rem;
    text-align: ${({tAlign}) => (tAlign ? 'left' : 'right')};;

    @media screen and (max-width: 768px) {
        text-align:center;        
    }
`