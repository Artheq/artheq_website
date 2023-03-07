import React, {useState} from 'react'
import Video from '../../images/hero1.jpg'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements'

const HeroSection = () => {
  const [ hover, setHover] = useState(false)

  const onHover =() => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg  src={Video}/>
        </HeroBg>
        <HeroContent>
          <HeroH1>Discover Yourself</HeroH1>
          <HeroP>
            Transforming Individuals and Organizations using Discovery, Guidance, and Coaching.
          </HeroP>
          <HeroBtnWrapper>
            <Button to='/download' onMouseEnter={onHover} onMouseLeave={onHover}
            primary="true"
            dark='true'
            fontBig="true"

            >
              Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection