import styled from "styled-components";

export const InfoContainer = styled.div`
color:#fff;
background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#f6f6f6')};

@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width:100%;
    max-width:1600px;
    margin-right:auto;
    margin-left:auto;
    padding: 0 24px;
    justify-content:center;
`

export const InfoRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`
export const Column1 = styled.div`
    margin-bottom:15px;
    padding:0 70px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom:15px;
    padding:0 65px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 1000px;
    padding-top: 0;
    padding-bottom:60px;
`
export const TopLine = styled.p`
    color: #0E74E6;
    font-size: 18px;
    font-weight:500;
    line-height: 16px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    
    color:black;
`
export const Heading = styled.h1`
    margin-bottom:24px;
    font-family:"Lato";
    font-weight:normal;
    font-size:55px;
    line-height:1.1;
    background-image: linear-gradient(47deg, orange 10%, #C850C0 20%, #0E74E6 100%);
    background-clip: text;
    color:transparent;;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 600px;
    margin-bottom:35px;
    font-family:"Lato";
    font-weight:normal;
    font-size:25px;
    line-height:1.2;
    color: ${({darkText}) => (darkText ? 'black' : 'white')};
`
export const BtnWrap = styled.div`
    display:flex;
    justify-content:flex-start;
`
export const ImgWrap = styled.div`
    max-width: 580px;

`
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius:10px;

    &:hover{
        box-shadow:0px 0px 10px rgba(128,128,128, 0.55) ;
        transition: all 0.2s ease-in-out;

    }

`