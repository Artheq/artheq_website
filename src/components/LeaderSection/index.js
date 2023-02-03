import React from 'react'
import { LeaderContainer, LeaderP, LeaderPC, ListBlock, ListImg,List, Li , ListImgDiv} from './LeaderElements'
import try3 from "../../images/try3.png"

const Leader = () => {
  return (
    <LeaderContainer>
        <LeaderPC>
        <LeaderP>
        The approach utilized by virtually all leadership development services employ meetings and sharing of best practices, an approach that we at ArthEQ believe is ineffective and incomplete.
        ArthEQ’s LEADTM platform takes leadership development to an entirely new level by providing existing portrait of candidates, including personalities and their tendencies as well as allowing them to continue to track the effectiveness of training.
        </LeaderP>
        </LeaderPC>

        <ListBlock>
            <ListImgDiv><ListImg src={try3}></ListImg></ListImgDiv>
            
            <List>
                <Li> Monitor progress after training education as they go through the course.</Li>
                <Li> Compare “before” and “after” scores to continue to enhance the learning experience. </Li>
                <Li> A detailed portrait of each participant’s communication style before the training even starts, including easily understood and detailed communication analytics and specific recommendations on focus areas, resulting in a much richer learning experience.</Li>
                <Li> Ability to choose a pre-determined length to deploy ArthEQ’s LEAD platform for “before and after measures”</Li>
            </List>
        </ListBlock>


    </LeaderContainer>
  )
}

export default Leader