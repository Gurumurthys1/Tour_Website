import React from 'react'
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import heroImage from '../component/img/about_3.avif';
import Footer from "../component/Footer";
import AboutUs from '../component/AboutUs';

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImg={heroImage}  
        title="About"
        btnclass="hide"
      />
      <AboutUs/>
      <Footer/>
    </div>
  );
}
export default About
