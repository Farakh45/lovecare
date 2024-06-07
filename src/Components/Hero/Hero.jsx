import React from "react";
import "./Hero.css"; // CSS file for styling
import hero from '../Assets/hero-image.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>All-Inclusive Living, <br/><span className="hero-text2"> One Platform. </span></h1>
        <p>
        Discover seamless scheduling with <span className="hero-text2" style={{fontWeight:"bold"}}>Love&Care</span>, your ultimate caregiver booking platform. 
        Easily update your availability in real-time and let clients book sessions directly without any scheduling conflicts. Find the perfect caregiver or client effortlessly.
        </p>
        <br/>
        <p>
         The best companion bot for your properties.
        </p>
      </div>

      <div className="hero-image">
        <img src={hero} alt="Hero Section" />
      </div>
    </section>
  );
};

export default Hero;
