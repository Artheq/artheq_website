import styled from "styled-components";

export const PurposeContainer = styled.div`
    height:350px;
`

export const PurposeWelcomeImg = styled.img`
    width: 100%;
    height: 350px;
    object-fit:cover;
    object-position:0% 40%;
`

export const PurposeWelcomeMessage = styled.h1`
    color:white;
    font-family:'Roboto';
    font-weight:normal;
    font-size:46px;
    
`
export const PurposeBg = styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow: hidden;
    z-index:1;
`

export const PurposeContent = styled.div`
    border-radius: 8px;
    z-index:3;
    max-width: 1600px;
    justify-content:center;
    position:absolute;
    height:400px;
    display:flex;
    align-items:flex-start;
    flex-direction:column;
    width:100%;
    padding-left:200px;
`

export const Container = styled.div`
    margin-top:350px
`