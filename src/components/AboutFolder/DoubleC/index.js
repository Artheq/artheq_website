import React from 'react'
import { DoubleContainer, ColumnHolder, ColumnOne, ColumnTwo, Img, Img2, THolder, Title, Subtitle } from './DoubleElements' 
import img from "../../../images/hero3.jpg"
import img2 from "../../../images/hl5.jpg"

const DoubleC = () => {
  return (
    <DoubleContainer>
        <ColumnHolder>
            <ColumnOne >
                <Img src={img}/>
                <Title>Purpose</Title>
                <Subtitle>To unleash the power of human potential by making communication more effective.​</Subtitle>
            </ColumnOne>
            <ColumnTwo>
                <Img2 src={img2}/> 
                <Title>Mission</Title>
                <Subtitle>To help people live with purpose and maximize their potential using the power of self-discovery and self-management. </Subtitle>

            </ColumnTwo>
        </ColumnHolder>
    </DoubleContainer>
  )
}

export default DoubleC