import React from 'react'
import Icon1 from '../../images/img-8.jpg'
import Icon2 from '../../images/img-9.jpeg'
import Icon3 from '../../images/img-10.jpg'
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP,
    ServicesLink
} from './ServicesElements'

const Services = () => {
  return (
    <>
    <ServicesContainer id="services">
        <ServicesH1>Our Team!</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Juan David Peña</ServicesH2>
                <ServicesP>Co-Founder
                    <li>Front End Dev and Analysis DBA</li>
                    <ServicesLink to="//www.linkedin.com/in/medranojdp/">linkedin: medranojdp</ServicesLink>
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Angela Vergara</ServicesH2>
                <ServicesP>Co-Founder
                    <li>Security and Authentication DBA</li>
                    <ServicesLink to="//www.linkedin.com/in/angela-vergara-salamanca/">linkedin: angela-vergara-salamanca</ServicesLink>
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Juan Esteban Correa</ServicesH2>
                <ServicesP>Co-Founder
                    <li>Packaging and Quality DBA</li>
                    <ServicesLink to="https://www.linkedin.com/in/juanestebancorreaperez/">linkedin: juanestebancorreaperez</ServicesLink>
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}

export default Services