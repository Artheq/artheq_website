import React from 'react'
import { PrivacyContainer, PrivacyCol, PrivacyImage,Seperator } from './PrivacyElements'
import pp1 from "../../images/pp1.png"
import pp2 from "../../images/pp2.png"
import pp3 from "../../images/pp3.png"
import pp4 from "../../images/pp4.png"
import pp5 from "../../images/pp5.png"
import pp6 from "../../images/pp6.png"
import pp7 from "../../images/pp7.png"


const Privacy = () => {
  return (
    <PrivacyContainer>
      <PrivacyCol>
          <PrivacyImage src={pp1}/>
          <PrivacyImage src={pp2}/>
      </PrivacyCol>
      <Seperator></Seperator>
      <PrivacyCol>
          <PrivacyImage src={pp3}/>
          <PrivacyImage src={pp4}/>
      </PrivacyCol>
      <Seperator></Seperator>

      <PrivacyCol>
          <PrivacyImage src={pp5}/>
          <PrivacyImage src={pp6}/>
      </PrivacyCol>
      <Seperator></Seperator>

      <PrivacyCol>
          <PrivacyImage src={pp7}/>
      </PrivacyCol>

    </PrivacyContainer>
  )
}

export default Privacy