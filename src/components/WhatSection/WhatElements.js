import styled from "styled-components";

export const WhatContainer = styled.div`
    display: row;
    height:800px;
    


`

export const BlueSection = styled.div`
    background-color: #024A99;
    height:800px;
    display:grid;
    justify-content:center;
    align-content:center;

    @media screen and (max-width: 900px) {
    }
`

export const BlueHeader = styled.h1`
    padding-top:170px;
    max-width:700px;
    font-size:3rem;
    color:white;
    text-align:center;

    @media screen and (max-width: 728px) {
        font-size:2rem;
    }
`

export const BlueSubheader = styled.p`
    font-size:1.5rem;
    max-width:700px;
    color:white;
    padding-top:30px;
    text-align:center;
    padding-bottom: 100px;

    @media screen and (max-width: 728px) {
        font-size:1.5rem;
        padding:10px;
    }
`

