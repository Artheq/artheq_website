import styled from "styled-components";

export const LeaderContainer = styled.div`
    height: 700px;
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
    margin-right:105px;
    padding-top:20px;
    height:100px;
    text-align:left;
    font-size:22px;
    color:#404040;

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
    background-color:#F6F6F6;

`

export const ListImg = styled.img`
    height:450px;
    width:600px;
`

export const List = styled.div`
    height:100%;
    width:50%;
    padding: 65px;
`

export const Li = styled.p`
    max-width:485px;
    padding-bottom:20px;
    font-size:1.1rem;
    color: #303030;
`

