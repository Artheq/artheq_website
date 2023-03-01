import React from 'react'
import { TermsContainer, TermsCol, TermsImage,Seperator } from './TermsElements'
import t1 from "../../images/t1.png"
import t2 from "../../images/t2.png"
import t3 from "../../images/t3.png"
import t4 from "../../images/t4.png"
import t5 from "../../images/t5.png"
import t6 from "../../images/t6.png"
import t7 from "../../images/t7.png"
import t8 from "../../images/t8.png"
import t9 from "../../images/t9.png"
import t10 from "../../images/t10.png"


const TermsPage = () => {
  return (
    <TermsContainer>
      <TermsCol>
          <TermsImage src={t1}/>
          <TermsImage src={t2}/>
      </TermsCol>
      <Seperator></Seperator>
      <TermsCol>
          <TermsImage src={t3}/>
          <TermsImage src={t4}/>
      </TermsCol>
      <Seperator></Seperator>

      <TermsCol>
          <TermsImage src={t5}/>
          <TermsImage src={t6}/>
      </TermsCol>
      <Seperator></Seperator>

      <TermsCol>
          <TermsImage src={t7}/>
          <TermsImage src={t8}/>
      </TermsCol>
      <TermsCol>
          <TermsImage src={t9}/>
          <TermsImage src={t10}/>
      </TermsCol>

    </TermsContainer>
  )
}

export default TermsPage