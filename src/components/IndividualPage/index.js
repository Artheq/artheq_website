import React, {useState} from 'react'
import { IndividualBtnWrapper,IndividualContainer, IndividualBg, ImgBg,ArrowForward,ArrowRight, IndividualContent, IndividualH1, IndividualP, IndividualP1 } from './IndividualPageElements'
import img from "../../images/hand.jpg"
import { Button } from '../ButtonElements'


const IndividualPage = () => {
  const [ hover, setHover] = useState(false)

  const onHover =() => {
    setHover(!hover)
  }
  return (
    <IndividualContainer>
      <IndividualBg>
        <ImgBg src={img}/>
      </IndividualBg>

      <IndividualContent>
        <IndividualH1>Discover Yourself</IndividualH1>
        <IndividualP1>ArthEQ is your coach-in-the-pocketTM.</IndividualP1>
        <IndividualP>Our interactive coaching is specific to you. Our AI engine learns from your interactions with others, observes your tendencies, and offers suggestions to improve how you can better present yourself.</IndividualP>

        <IndividualBtnWrapper>
            <Button to='/download' onMouseEnter={onHover} onMouseLeave={onHover}
            primary="true"
            dark='true'
            fontBig="true"

            >
              Learn Now {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
          </IndividualBtnWrapper>
     
      </IndividualContent>

    </IndividualContainer>
  )
}

export default IndividualPage