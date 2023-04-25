import styled from "styled-components";

export const MainContainer = styled.div`
    background-color:#f6f6f6;
    display:flex;
    align-items:center;
    justify-content:center;

`

export const Layer = styled.div`
    height:800px;
    width:90%;
    display:flex;
    flex-direction:row;
`

export const LeftContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:80px;
    
`

export const RightContainer = styled.div`
    width:100%;
    height:100%;
    padding-left:100px;
    padding-right:100px;
    display:flex;
    flex-direction:column;
    justify-content:center;

`

export const Li = styled.div`
    height:85px;
    margin-bottom:20px;
    border-radius:8px;
    box-shadow:0px 0px 30px rgba(128,128,128, 0.15) ;
    display: flex;
    flex-direction: row;
    align-items:center;

    &:hover{
        box-shadow:0px 0px 30px rgba(128,128,128, 0.25) ;
        transition: all 0.2s ease-in-out;


    }
`
export const IconL = styled.div`
    border-radius:8px;
    width:15%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:50px;
    color: #FF7456;
    
`
export const IconL2 = styled.div`
    border-radius:8px;
    width:15%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:50px;
    color: #57A6FF;
`
export const IconL3 = styled.div`
    border-radius:8px;
    width:15%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:50px;
    color: #77C272;
`
export const IconL4 = styled.div`
    border-radius:8px;
    width:15%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:50px;
    color: #FF4040;
`

export const TextCont = styled.div`
    border-radius:8px;
    width:100%;
    font-weight:bold;
    font-size:1.2rem;
    margin-left:10px;
`

export const TopLine = styled.p`
    color: black;
    font-size: 4px;
    font-weight:500;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    
`

export const Heading = styled.h1`
    font-family:"Lato";
    font-weight:normal;
    max-width:550px;
    font-size:60px;
    line-height:1.3;
    background-image: linear-gradient(47deg, orange 10%, #C850C0 20%, #0E74E6 100%);
    background-clip: text;
    color:transparent;
    margin-bottom:20px;
    line-height:1.15;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const Subtitle = styled.p`
    max-width: 600px;
    font-family:"Lato";
    font-weight:normal;
    font-size:28px;
    line-height:38px;
    color: #616060;
`
