import React from 'react'
import { Button } from '../ButtonElements'
import { Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img ,Column2, InfoRow, InfoWrapper, MainContainer } from './Info2Elements'

const InfoSection2 = ({primary, dark, buttonLabel,id, lightBg, topLine, imgStart, headline, description, img}) => {
  return (
    <MainContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart = {imgStart}>
            <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading>{headline}</Heading>
                    <Subtitle>{description}</Subtitle>
                    <BtnWrap>
                   
                    </BtnWrap>
                </TextWrapper>
            </Column1>
            <Column2>
            <ImgWrap>
                <Img src ={img}/>
            </ImgWrap>
            </Column2>
            </InfoRow>
        </InfoWrapper>
    </MainContainer>
  )
}

export default InfoSection2