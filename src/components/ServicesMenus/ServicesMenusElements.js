import styled from "styled-components";

export const ServicesContainer = styled.div`
   height: 800px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;

    @media screen and (max-width: 768px) {
        height:1100px;
        
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }

`

export const ServicesRow = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    align-items:center;
    grid-gap:50px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesBox = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    border-radius: 10px;
    height: 500px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &.hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`