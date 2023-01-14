import styled from "styled-components";

export const WhoContainer = styled.div`
    background:#f9f9f9;
    height:500px;
    display:flex;
    
    @media screen and (max-width: 768px) {
    padding: 100px 0;
    height:1000px;
    display:grid;
    padding:20px;
    }
`
export const WhoTextBox = styled.div`
    padding:50px;
    display:grid;
    align-content:center;
    justify-content:center;
    flex:1;
`

export const WhoHeading = styled.h1`
    font-size:3em;
`

export const WhoP = styled.p`
    font-size:1.2em;
    padding-top:10px;
`
export const WhoP1 = styled.p`
    font-size:1.2em;
    padding-top:25px;
`

export const WhoImgContainer = styled.div`
    flex:1;
    display:flex;
    align-content:center;
    justify-content:center;
    align-items:center;
`

export const Img = styled.img`
    border-radius:50px;
    width:450px;
    height:450px;
`
