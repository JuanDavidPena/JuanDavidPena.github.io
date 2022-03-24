import React from 'react'
import Icon1 from '../../images/img-13.png'
import Icon2 from '../../images/img-12.png'
import Icon3 from '../../images/img-14.png'
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP
} from './style2'

const Services0 = () => {
  return (
    <>
    <ServicesContainer id="services0">
        <ServicesH1>We understand!</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Update Expenses</ServicesH2>
                <ServicesP>In tech industry, updating or migrating databases is one of the hardest and most expensive processes.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Complex Databases</ServicesH2>
                <ServicesP>Certain industries can have crazy complexity on their DB structures!</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Offline deploys</ServicesH2>
                <ServicesP>Bussiness can lose a lot of money and customers if they have their services off for just a couple of minutes.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}

export default Services0