import styled from "styled-components";

export const LeaderContainer = styled.div`
    height: 900px;
    background-color: #f9f9f9;


    @media screen and (max-width: 900px) {
        height:300px;
        padding-top:20px
    }

    @media screen and (max-width: 728px) {
        height:300px;
        margin-top:-200px;
    }


`

export const LeaderP = styled.p`
    max-width:1000px;
    text-align:center;
    font-size:22px;

    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`

export const LeaderPC = styled.div`
    width:100%;
    display:flex;
    
    justify-content:center;

  
`

export const ListImgDiv = styled.div`
    width:50%;
    display:flex;
    justify-content:end;
`

export const ListBlock = styled.div`
    margin-top:100px;
    display:flex;
    justify-content:center;
    height:500px;   

`

export const ListImg = styled.img`
    height:450px;
    width:700px;
`

export const List = styled.div`
    height:100%;
    width:50%;
    padding: 65px;
`

export const Li = styled.p`
    max-width:600px;
    padding-bottom:20px;
    font-size:20px;
`

