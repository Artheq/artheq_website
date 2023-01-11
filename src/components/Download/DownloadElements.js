import styled from "styled-components";

export const DownloadContainer = styled.div`
    height:1000px;
    background-color:#E4F1FF;
    padding:10px;
`

export const DownloadIntroContainer =styled.div`
    height:300px;
    display:flex;
    justify-content: space-around;
`

export const DownloadColumnWrap = styled.div`
    height:600px;
    display:flex;
    justify-content:space-evenly;

    @media screen and (max-width: 1000px) {
        flex-direction:column;
        align-items:center    
    }

`
export const DownloadHeading = styled.h1`
    color:black;
    font-size:36px;
    padding-top:150px;
`

export const DownloadSub = styled.p`
    padding-top:160px;
    font-size:20px;


`
export const Column1 = styled.div`
    height: 450px;
    width: 350px;
    background-color: #f9f9f9;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:20px;
    box-shadow:0px 0px 6px rgba(128,128,128, 0.35) ;
    padding:10px;


    @media screen and (max-width: 1000px) {
        margin:10px;
    }
`

export const Column2 = styled.div`
    height: 450px;
    width: 350px;
    background-color: #f9f9f9;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:20px;
    box-shadow:0px 0px 6px rgba(128,128,128, 0.35) ;
    padding:10px;


    @media screen and (max-width: 1000px) {
        margin:10px
    }
`
export const Column1Wrap = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const Column2Wrap = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const Button1Wrap = styled.div`

`
export const Button2Wrap = styled.div`

`

export const C1Platform = styled.p`
    text-align:center;
`
export const C2Platform = styled.p`
`

export const C1Header = styled.h1`
`

export const C2Header = styled.h1`

`

export const C1des = styled.p`
    padding-top:10px;
    text-align:center;

`

export const C2des = styled.p` 
    padding-top:10px;
    text-align:center;
`
