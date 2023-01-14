import styled from "styled-components";

export const WhoContainer = styled.div`
    padding:120px;
    width:100%;
    background:#f9f9f9;
    height:700px;
    display:flex;
    
    @media screen and (max-width: 768px) {
    width:100%;
    height:1000px;
    display:grid;
    align-items:center;
    align-content:center;
    grid-template-columns:1fr;
    padding:20px;
    }
`
export const WhoTextBox = styled.div`
    margin-top:200px;
    padding:50px;
    display:grid;
    align-content:center;
    justify-content:center;
    flex:1;
`

export const WhoHeading = styled.h1`
    font-size:3em;

    @media screen and (max-width: 768px) {
        font-size:3em;

    }
`

export const WhoP = styled.p`
    font-size:1.2em;
    padding-top:10px;

    @media screen and (max-width: 768px) {
        font-size:1em;

    }
`
export const WhoP1 = styled.p`
    font-size:1.2em;
    padding-top:25px;

    @media screen and (max-width: 768px) {
        font-size:1em;

    }
`

export const WhoImgContainer = styled.div`
    margin-top:200px;
    flex:1;
    display:grid;
    padding-top:20px;
    align-content:center;
    justify-content:center;
    align-items:center;
`

export const Img = styled.img`
    border-radius:50px;
    width:450px;
    height:450px;
`
