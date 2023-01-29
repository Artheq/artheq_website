import React from 'react'
import { TeamContainer, OurTeam, TitleContainer, MemberRow, MemberTile, MemberName, MemberImg, MemberDes } from './TeamElements'
import Serhat from '../../images/serhat.jpeg'
import Oguz from '../../images/Oguz.jpeg'
import Ozkan from '../../images/Ozkan.jpeg'
import Curt from '../../images/Curt.jpeg'
import Sudesh from '../../images/Sudesh.jpeg'
import Maneesh from '../../images/Maneesh.jpeg'
import Sudhir from '../../images/Sudhir.jpeg'


const Team = () => {
  return (
    <TeamContainer>
        <TitleContainer>
            <OurTeam>Our Team</OurTeam>
        </TitleContainer>
        <MemberRow>
        <MemberTile>
                <MemberImg src={Maneesh}></MemberImg>
                <MemberName>Maneesh Sharma</MemberName>
                <MemberDes>Co-Founder and Chief Executive Officer  (CEO). Maneesh has extensive background in business and management.</MemberDes>
            </MemberTile>
            <MemberTile>
                <MemberImg src={Oguz}></MemberImg>
                <MemberName>Oguz Akkas</MemberName>
                <MemberDes>Co-Founder and Chief Technology Officer (CTO). Oguz has extensive background in AI/ML, cloud techologies, back-end, and front-end applications.</MemberDes>
            </MemberTile>
            <MemberTile>
                <MemberImg src={Sudhir}></MemberImg>
                <MemberName>Sudhir Sharma</MemberName>
                <MemberDes>Co-Founder and Chief Strategy officer. Sudhir has an extensive body of experience, including in start-ups.</MemberDes>
            </MemberTile>
            <MemberTile>
                <MemberImg src={Ozkan}></MemberImg>
                <MemberName>Ozkan Cankya</MemberName>
                <MemberDes>Founding team member and Chief Technical officer with extensive knowledge of modeling technology platforms.</MemberDes>
            </MemberTile>
        </MemberRow>
        <MemberRow>
            <MemberTile>
                <MemberImg src={Serhat}></MemberImg>
                <MemberName>Serhat Cingilli</MemberName>
                <MemberDes>Founding team member and Senior design officer.</MemberDes>
            </MemberTile>
            <MemberTile>
                <MemberImg src={Curt}></MemberImg>
                <MemberName>Curt Giltsrap</MemberName>
                <MemberDes>Founding team member and Chief language officer. Curt has extensive experience in modeling human communication.</MemberDes>
            </MemberTile>
            <MemberTile>
                <MemberImg src={Sudesh}></MemberImg>
                <MemberName>Sudesh Mujumdar</MemberName>
                <MemberDes>Founding team member and Chief analytics & finance officer. Sudesh comes extensive background in creating indexes and benchmarks.</MemberDes>
            </MemberTile>
        </MemberRow>

    </TeamContainer>
  )
}

export default Team