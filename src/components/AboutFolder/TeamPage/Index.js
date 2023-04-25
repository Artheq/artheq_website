import React from 'react'
import { TeamContainer, ItemWrapper, TextWrapper, ImgWrapper, Para, Title , Img} from './PurposeElements'
import img from '../../../images/sheep.jpg'

const TeamPage = () => {
  return (
    <TeamContainer>
        <TextWrapper>
          <Title>Our Team</Title>
          <Para>We’re a team of educators, scientists, and humans who are passionate about helping people grow personally and professionally, live with clarity and purpose, and unleash their full potential. ​</Para>
        </TextWrapper>
    </TeamContainer>
  )
}

export default TeamPage