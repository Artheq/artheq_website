import styled from "styled-components";

export const FormContainer = styled.div`
  overflow: auto;
  width:100%;
  height:977px;   
  display:flex;
  justify-content:center;
  align-items:center;
  margin: 0 auto;
  background-color:#1F83F2;
  
`;

export const WidAdj = styled.div`
    width:580px;
    padding:50px;;
    border-radius:6px;
    box-shadow:-4px 4px 0.5px #195EAB ;
    background-color:white;
    
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height:400px;
  justify-content:center;
  width:100%;
`;

export const FormGroup = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:40px;

`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  border-radius:2px;
  font-weight:700;

`;

export const Input = styled.input`
   background-image: linear-gradient(#20aee3, #20aee3), linear-gradient(#bfbfbf, #bfbfbf);
  border: 0 none;
  box-shadow: none;
  float: none;
  background-color: transparent;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  padding: 0;
  transition: background 0s ease-out 0s;
  min-height: 35px;
  display: initial;
  width: 100%;
  outline: none;
  font-size: 15px;
  resize:none;
  &:focus {
      background-size: 100% 2px, 100% 1px;
      outline: 0 none;
      transition-duration: 0.3s;
      color: black;
    }


`;

export const Button = styled.button`
  padding: 0.75rem 2.5rem;
  border-radius:4px;
  background-color: #1864B8;
  color: #fff;
  font-weight:800;
  font-size:26px;
  border: none;
  cursor: pointer;
  margin-top:85px;

  &:hover {
        transition: all 0.2s ease-in-out;
        color:white;
        background-color:#195EAB;

    }
`;

export const Title = styled.h1`
  font-weight:400;
  font-size:3.5rem;
  margin-left:-5px;
  text-align:center;
  color:black;
`;

export const SubTitle = styled.p`
  font-weight:500;
  max-width:500px;
  
`;

export const ResultsContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const ContainerOne = styled.div`
    display:flex;
    width:16%;
    height:977px;
    flex-direction:column;
    background-color:white;
    padding:50px;
    background-color:#f9f9f9;
    align-items:center;
`

export const ContainerTwo = styled.div`
`
export const ContainerInside = styled.div`
    padding: 90px
`
