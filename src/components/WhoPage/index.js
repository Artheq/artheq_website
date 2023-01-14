import React from 'react'
import { WhoContainer, WhoHeading,WhoTextBox,WhoP,WhoImgContainer , WhoP1, Img} from './whoElements';
import Icon1 from '../../images/i2.png'

const WhoPage = () => {
  return (
    <>
    <WhoContainer>
        <WhoTextBox>
          <WhoHeading>Our Purpose & Mission</WhoHeading>
          <WhoP>Our purpose is to unleash the power of human potential by making communication more effective.</WhoP>
          <WhoP1>Our mission is to enable people and organizations to maximize their potential using the power of self-discovery, positive communication, personal branding, and coaching.</WhoP1>
        </WhoTextBox>
        <WhoImgContainer>
            <Img src={Icon1}></Img>
        </WhoImgContainer>
    </WhoContainer>
    </>
  )
}

export default WhoPage;