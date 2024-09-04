import React from 'react'
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import heroImage from '../component/img/contact_1.avif';
import Footer from "../component/Footer";
import ContactFrom from '../component/ContactFrom';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImg={heroImage}  
        title="Contact"
        btnclass="hide"
      />
      <ContactFrom/>
      <Footer/>
    </div>
  )
}

export default Contact
