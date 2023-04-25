import styled from "styled-components";

export const TeamContainer = styled.div`
    background: black;
    display:flex;
    height:390px;
    justify-content:center;
    align-items:center;

    @media screen and (max-width: 768px) {
    padding: 100px 0;
}
`

export const ItemWrapper = styled.div`
    height:300px;
    /* box-shadow:0px 0px 3px rgba(128,128,128, 0.35) ; */
    width:80%;
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    padding:20px;
    

`

export const TextWrapper = styled.div`
    width:37%;
    height:100%;
    display:grid;
    align-content:center;
`



export const Title = styled.h1`
    font-family:'Lato';
    background-image: linear-gradient(47deg, #0E74E6 0%, #C850C0 20%, #0E74E6 100%);
    background-clip: text;
    color:transparent;
    font-size:90px;
    padding-bottom:10px;
    text-align:center;
`
export const Para = styled.p`
    text-align:center;
    font-family:'Lato';
    color:white;
    font-size:25px;
    font-weight:normal;
`
