import React from 'react'
import { MiniContainer, MiniColumn, Header, Body } from './MiniElements'

const MiniSection = ({mainHeader, topHeader, tAlign}) => {
  return (
    <MiniContainer>
        <MiniColumn>
            <Body tAlign={tAlign}>{topHeader}</Body>
            <Header>{mainHeader}</Header>
        </MiniColumn>
    </MiniContainer>
  )
}

export default MiniSection