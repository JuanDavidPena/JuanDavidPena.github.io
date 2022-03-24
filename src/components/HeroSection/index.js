import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Aranda Database Diagnose Utility</HeroH1>
          <HeroP>
            Update your database easier than ever! Less waiting time, less rollbacks, less stress! Download right now and start loving your version releases.
          </HeroP>
          <HeroBtnWrapper>
            <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover}>
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection