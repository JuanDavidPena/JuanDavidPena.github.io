import React from 'react'
import Icon1 from '../../images/img-4.png'
import Icon2 from '../../images/img-5.png'
import Icon3 from '../../images/img-6.png'
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP
} from './style2'

const Services2 = () => {
  return (
    <>
    <ServicesContainer id="services2">
        <ServicesH1>What we do</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Remove aditional fixing time on your updates.</ServicesH2>
                <ServicesP>We will let you know before you even start if everything is going to work smoothly or not!</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Reduce your costs.</ServicesH2>
                <ServicesP>No more wasted resources! Less manpower, system resources and most importantly Time!</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Improve your QA control.</ServicesH2>
                <ServicesP>Get to know if your update processes and scripts need a little bit more love from the devs!</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}

export default Services2