import React from 'react'
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import heroImage from '../component/img/service_1.avif';
import Footer from "../component/Footer";
import Trip from '../component/Trip';

const Service = () => {
  return (
    <div>
     <Navbar />
      <Hero 
        cName="hero-mid"
        heroImg={heroImage}  
        title="Service"
        btnclass="hide"
      />
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Service
