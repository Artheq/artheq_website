import styled from "styled-components";

export const MiniContainer = styled.div`
    display:flex;
    height:100px;
    background-color:#f9f9f9;
    align-items:center;
    justify-content:center;

    @media screen and (max-width: 768px) {
        height:600px;
        
    }

`
export const MiniColumn = styled.div`
    display:column;
    align-content:center;
    justify-content:center;
`

export const Header = styled.h1`
    color:#0E74E6;
    font-size:40px;
    text-align:center;
  
`
export const Body = styled.p`
    color:black;
    font-size:18px;
    text-align:center;
`