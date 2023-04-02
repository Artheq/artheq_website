import React, {useState} from 'react'
import { ArrowForward,ArrowRight,HeroBtnWrapper,IndustryContainer,IndustryBg,IndustryImgCont , ImgBg,HeroH1, HeroP, IndustriesContent } from './IndustryElements'
import img from '../../images/b12.png'
import { Button } from '../ButtonElements'

const IndustryMain = () => {
  const [ hover, setHover] = useState(false)

  const onHover =() => {
    setHover(!hover)
  }
  return (
    <IndustryContainer>

      <IndustryImgCont>
        <IndustryBg>
          <ImgBg src={img}/>
        </IndustryBg>
      </IndustryImgCont>

      <IndustriesContent>
      <HeroH1>Build Self-Aware Leaders</HeroH1>
      <HeroP>Inspire purpose, increase engagement, and accelerate business transformation with ARTH Lead Better.</HeroP>
      
      <HeroBtnWrapper>
            <Button to='/download' onMouseEnter={onHover} onMouseLeave={onHover}
            primary="true"
            dark='true'
            fontBig="true"

            >
              Request Demo {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
          </HeroBtnWrapper>
      </IndustriesContent>
    </IndustryContainer>
  )
}

export default IndustryMain