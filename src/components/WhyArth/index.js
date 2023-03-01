import React from 'react'
import { WhyContainer, WhyContainer1, InsideContainer, Img1, TextArea, TextHeading,TextP, Img2 } from './WhyElements'
import img1 from '../../images/why1.jpg'
import img2 from '../../images/why2.jpg'

const WhyArth = () => {
  return (
    <WhyContainer>
        <WhyContainer1>
            <InsideContainer>
                <Img1 src={img1}/>
                    <TextArea>
                        <TextHeading>ARTH of Discovery</TextHeading>
                        <TextP>Using the power of AI trained models, we provide a plethora of information to users, helping them to see their preferences, strengths, and areas of improvement. This information thus serves as the First Arc towards self-discovery and improvements.</TextP>
                    </TextArea>
                <Img2 src={img2}/>
            </InsideContainer>
        </WhyContainer1>

    </WhyContainer>
  )
}

export default WhyArth