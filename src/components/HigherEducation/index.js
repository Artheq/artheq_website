import React, {useState} from 'react'
import { HigherEducationContainer,HigherBtnWrapper , HigherBg, ImgBg, HigherContent,HigherH1, HigherP, HigherBgPanel,ArrowForward, ArrowRight } from './HigherEducationElements'
import img from "../../images/university.jpg"
import { Button } from '../ButtonElements'


const HigherEducation = () => {
  const [ hover, setHover] = useState(false)

  const onHover =() => {
    setHover(!hover)
  }
  return (
    <HigherEducationContainer>
        <HigherBg>
            <ImgBg src={img}/>
        </HigherBg>

        <HigherContent>
            <HigherBgPanel></HigherBgPanel>
            <HigherH1>Create the Next Generation of Leaders</HigherH1>
            <HigherP>Arth's collaborative platforms improves classrooms by enhancing learning outcomes, accelerating student leadership.</HigherP>
            <HigherBtnWrapper>
            <Button to='/download' onMouseEnter={onHover} onMouseLeave={onHover}
            primary="true"
            dark='true'
            fontBig="true"

            >
              Learn How {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
          </HigherBtnWrapper>
        </HigherContent>
        
    </HigherEducationContainer>
  )
}

export default HigherEducation