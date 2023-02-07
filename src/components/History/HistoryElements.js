import styled from "styled-components";

export const HistoryContainer = styled.div`
    align-items:center;
    justify-content:center;
    display:flex;
    height:600px;
    background-color:#f9f9f9;
    padding:75px;

    @media screen and (max-width: 728){
        background-color:red;
    }  
`

export const HistoryH1 = styled.h1`
    font-size:3.5rem;
    align-self:center;
    text-align:center;
`

export const HistoryP = styled.p`
    font-size:1.2rem;
    text-align:center;
    padding-left:150px;
    padding-right:150px;
`

export const FloatingContainer = styled.div`
    justify-content:center; 
    background-color:white;
    width:900px;
    display:grid;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    height:500px;
    border-radius:10px;
    padding:20px;

    @media screen and (max-width: 768){
        height: 600px;
    }   
`