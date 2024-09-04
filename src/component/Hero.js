import React from 'react';
import './HeroStyle.css';

const Hero = (props) => {
  return (
    <div className={props.cName}>
      <img alt='Hero_img' src={props.heroImg}></img>

      <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnclass}>{props.ButtonText}</a>
      </div>
    </div>
  );
};

export default Hero;
