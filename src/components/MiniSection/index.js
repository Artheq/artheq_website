import React from 'react'
import { MiniContainer, MiniColumn, Header, Body } from './MiniElements'

const MiniSection = ({mainHeader, topHeader}) => {
  return (
    <MiniContainer>
        <MiniColumn>
            <Body>{topHeader}</Body>
            <Header>{mainHeader}</Header>
        </MiniColumn>
    </MiniContainer>
  )
}

export default MiniSection