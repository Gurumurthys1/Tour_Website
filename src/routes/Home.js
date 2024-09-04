import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import heroImage from '../component/img/hero_6.jpg'
import Destination from '../component/Destination';
import Trip from '../component/Trip';
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero 
        cName="hero"
        heroImg={heroImage}  // Pass the imported image here
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        btnclass="show"
        ButtonText="Travel Plan"
        url="/"
      />
      <Destination/>
      <Trip/>
      <Footer/>
      
    </div>
  );
}

export default Home;
