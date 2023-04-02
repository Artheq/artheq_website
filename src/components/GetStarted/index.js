import React, {useState} from 'react'
import { BtnWrap, GetStartedContainer, Heading, SubHeading, TextContainer, BtnTxt, ButtonContainer, ArrowForward, ArrowRight } from './GetStartedElements'

const GetStarted = () => {
    const [ hover, setHover] = useState(false)

  const onHover =() => {
    setHover(!hover)
  }
  return (
    
    <GetStartedContainer>
        <TextContainer>
            <Heading>Get Started</Heading>
            <SubHeading>Download ARTHEQ's App on iOS and Android Today.</SubHeading>
        </TextContainer>
        <ButtonContainer>
        <BtnWrap>
            <BtnTxt onMouseEnter={onHover} onMouseLeave={onHover}>Request Demo{hover ? <ArrowForward/> : <ArrowRight/>}</BtnTxt>
        </BtnWrap>
        </ButtonContainer>
    </GetStartedContainer>
  )
}

export default GetStarted