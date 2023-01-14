import React from 'react'
import { TeamContainer, OurTeam, TitleContainer, MemberRow, MemberTile, MemberName, MemberImg, MemberDes } from './TeamElements'
import Icon1 from '../../images/serhat.jpeg'


const Team = () => {
  return (
    <TeamContainer>
        <TitleContainer>
            <OurTeam>Our Team</OurTeam>
        </TitleContainer>
        <MemberRow>
            <MemberTile>
                <MemberImg src={Icon1}></MemberImg>
                <MemberName>Oguz Akkas</MemberName>
                <MemberDes>Co-Founder and Chief Operating officer and Product Manager. Oguz has extensive background in AI and ML.</MemberDes>
            </MemberTile>
            <MemberTile>
                <MemberImg src={Icon1}></MemberImg>
                <MemberName>Sudhir Sharma</MemberName>
                <MemberDes>Co-Founder and Chief Strategy officer. Sudhir has an extensive body of experience, including in start-ups.</MemberDes>
            </MemberTile>
            <MemberTile>
                <MemberImg src={Icon1}></MemberImg>
                <MemberName>Ozkan Cankya</MemberName>
                <MemberDes>Founding team member and Chief Technical officer with extensive knowledge of modeling technology platforms.</MemberDes>
            </MemberTile>
        </MemberRow>
        <MemberRow>
            <MemberTile>
                <MemberImg src={Icon1}></MemberImg>
                <MemberName>Serhat Cingilli</MemberName>
                <MemberDes>Founding team member and Senior design officer.</MemberDes>
            </MemberTile>
            <MemberTile>
                <MemberImg src={Icon1}></MemberImg>
                <MemberName>Curt Giltsrap</MemberName>
                <MemberDes>Founding team member and Chief language officer. Curt has extensive experience in modeling human communication.</MemberDes>
            </MemberTile>
            <MemberTile>
                <MemberImg src={Icon1}></MemberImg>
                <MemberName>Sudesh Mujumdar</MemberName>
                <MemberDes>Founding team member and Chief analytics & finance officer. Sudesh comes extensive background in creating indexes and benchmarks.</MemberDes>
            </MemberTile>
        </MemberRow>

    </TeamContainer>
  )
}

export default Team