import React from 'react'
import { MainContainer, Layer, LeftContainer, RightContainer, TopLine, Heading, Subtitle, Li, IconL, TextCont, IconL2, IconL3, IconL4} from './tripleElements';
import {SiSpeedtest} from 'react-icons/si'
import {FaComments, FaLaugh, FaBrain} from 'react-icons/fa'
import { Button } from '../ButtonElements';



const TripleC = () => {
  return (
    <MainContainer>
        <Layer>
            <LeftContainer>
                <TopLine></TopLine>
                <Heading>Feel more fulfilled by enhancing your Self-Awareness</Heading>
                <Subtitle>Self-aware people are measurably happier and successful in their personal as well as professional lives.</Subtitle>
            </LeftContainer>
            <RightContainer>
                    <Li>
                        <IconL><SiSpeedtest/></IconL>
                        <TextCont>Learn Your Self Awareness Score</TextCont>
                    </Li>
                    <Li>
                        <IconL2><FaComments/></IconL2>
                        <TextCont>Build Stronger Relationships</TextCont>
                    </Li>
                    <Li>
                        <IconL3><FaLaugh/></IconL3>
                        <TextCont>Increase Your Happiness</TextCont>
                    </Li>
                    <Li>
                        <IconL4><FaBrain/></IconL4>
                        <TextCont>Be More Mindful</TextCont>
                    </Li>

            </RightContainer>
        </Layer>
    </MainContainer>
  )
}

export default TripleC;