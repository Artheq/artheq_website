import React from 'react'
import Icon1 from '../../images/i2.png'
import Icon2 from '../../images/i2.png'
import Icon3 from '../../images/i2.png'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <>
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We help reduce your dees and increase revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Virtual Offices</ServicesH2>
                <ServicesP>We help reduce your dees and increase revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>We help reduce your dees and increase revenue.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>

    </>
  )
}

export default Services