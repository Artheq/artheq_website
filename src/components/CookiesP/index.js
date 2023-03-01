import React from 'react'
import { CookiesContainer, CookiesImg, CookieT , ImgContainer} from './CookiesElements'
import img from "../../images/cookies.png"

const CookiesP = () => {
  return (
    <CookiesContainer>
        <CookieT>ARTH Cookie Policy</CookieT>
        <ImgContainer><CookiesImg src={img}/></ImgContainer>
        
    </CookiesContainer>
  )
}

export default CookiesP