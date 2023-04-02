import styled from "styled-components";

export const MainContainer = styled.div`
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#f6f6f6')};

    @media screen and (max-width: 768px) {
    padding: 100px 0;
}
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 950px;
    width:100%;
    max-width:2000px;
    margin-right:auto;
    margin-left:auto;
    padding: 0 20px;
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
    padding:0 60px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom:15px;
    padding:0 60px;
    grid-area: col2;
`
export const TextWrapper = styled.div`
    max-width: 700px;
    padding-bottom:60px;
`

export const TopLine = styled.p`
    color: black;
    font-size: 40px;
    font-weight:500;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    
`

export const Heading = styled.h1`
    margin-bottom:24px;
    font-family:"Lato";
    font-weight:normal;
    font-size:80px;
    line-height:1.1;
    color: black;
    background-image: linear-gradient(47deg, orange 10%, #C850C0 20%, #0E74E6 100%);
    background-clip: text;
    color:transparent;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const Subtitle = styled.p`
    max-width: 600px;
    margin-bottom:30px;
    font-family:"Lato";
    font-weight:normal;
    font-size:30px;
    line-height:38px;
    color: black;
`
export const BtnWrap = styled.div`
    display:flex;
    justify-content:flex-start;
`
export const ImgWrap = styled.div`
    max-width: 680px;

`
export const Img = styled.img`
    height:90%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius:12px;
`