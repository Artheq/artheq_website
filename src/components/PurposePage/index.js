import React from 'react'
import { PurposeContainer, PurposeWelcomeImg, PurposeWelcomeMessage, PurposeBg, PurposeContent} from './PurposeElements'
import img from "../../images/mountain.jpg"


const PurposeMain = () => {
  return (

    <PurposeContainer>
        <PurposeBg><PurposeWelcomeImg src={img}></PurposeWelcomeImg></PurposeBg>
        <PurposeContent>
        <PurposeWelcomeMessage> PURPOSE & MISSION</PurposeWelcomeMessage>
        </PurposeContent>
        
        
    </PurposeContainer>
  )
}

export default PurposeMain;