import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Services2 from '../components/Services/index2';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services2 />
        <InfoSection {...homeObjThree}/>
        <Services />
        <Footer />

    </>
  )
}

export default Home