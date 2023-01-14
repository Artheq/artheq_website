import React from 'react'
import { HistoryContainer, HistoryH1, HistoryP, FloatingContainer } from './HistoryElements'

const History = () => {
  return (
    <HistoryContainer>
        <FloatingContainer>
            <HistoryH1>Our History</HistoryH1>
            <HistoryP>ArthEQ was founded by Maneesh Sharma in 2022. The word Arth is derived from the Sanskrit
                        language and translates into “meaning or essence”. The inspiration for ArthEQ came from Maneesh’s
                        own professional and spiritual journey where he noted how careers and personal relationships are
                        impacted by poor communications as well as a lack of tools and mechanisms that inform people and
                        organizations about their “personal culture”. ArthEQ was thus founded to help people and
                        organizations transform themselves- one communication at a time.
            </HistoryP>
        </FloatingContainer>
    </HistoryContainer>
  )
}

export default History