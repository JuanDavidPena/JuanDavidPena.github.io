import React from 'react'
import Icon1 from '../../images/img-1.png'
import Icon2 from '../../images/img-1.png'
import Icon3 from '../../images/img-1.png'
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP
} from './ServicesElements'

const Services = () => {
  return (
    <>
    <ServicesContainer id="services">
        <ServicesH1>Our Team!</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Juan David</ServicesH2>
                <ServicesP>We help reduce your fees</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Angela</ServicesH2>
                <ServicesP>We help reduce your fees</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Juan Esteban</ServicesH2>
                <ServicesP>We help reduce your fees</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}

export default Services