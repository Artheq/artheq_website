import React, {useState} from 'react'
import { MissionBtnWrapper,MissionContainer, MissionBg, ImgBg,ArrowForward,ArrowRight, MissionContent, MissionH1, MissionP } from './MissionElements'
import img from "../../../images/mus.jpg"
import { Button } from '../../ButtonElements'


const MissionPage = () => {
  const [ hover, setHover] = useState(false)

  const onHover =() => {
    setHover(!hover)
  }
  return (
    <MissionContainer>
      <MissionBg>
        <ImgBg src={img}/>
      </MissionBg>

      <MissionContent>
        <MissionH1>Discover Yourself</MissionH1>
        <MissionP>Our interactive coaching is specific to you. Our technology learns from your conversations, speeches and tendencies and offers suggestions to improve your interactions with the world. </MissionP>
        <MissionBtnWrapper>
            <Button to='/download' onMouseEnter={onHover} onMouseLeave={onHover}
            primary="true"
            dark='true'
            fontBig="true"

            >
              Learn Now {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
          </MissionBtnWrapper>
     
      </MissionContent>

    </MissionContainer>
  )
}

export default MissionPage