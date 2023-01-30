import styled from "styled-components";

export const TeamContainer = styled.div`
    background-color:#E4F1FF;
    display:grid;
`
export const TitleContainer = styled.div`
    margin-top:90px;
    justify-content:center;
    display:flex;
`

export const OurTeam = styled.h1`
    font-size: 2.5rem;
    color: black;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const MemberRow = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    align-items:center;
    grid-gap:16px;
    padding: 0 50px;
    padding-bottom:50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }   
`

export const MemberTile = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    border-radius: 10px;
    height: 370px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

`

export const MemberImg = styled.img`
    height:200px;
    width:200px;
    margin-bottom:10px;
    border-radius:100px;
`

export const MemberName = styled.h2`
    font-size: 1rem;
    margin-bottom:10px;
`

export const MemberDes = styled.p`
    font-size: 1rem;
    
    text-align:center;
`