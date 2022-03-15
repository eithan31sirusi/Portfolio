import React from "react";

import MainHeadline from "../../animations/MainHeadline";

import "./aboutme.styles.css";
import ProfileImage from "../../images/profile.jpeg";
import ImageAnimation from '../../animations/ChangeImage';




const AboutMe = () => {
  return (
    <div id="about" className="about_container" >
      <div className="row " >
        <div className="animation_container col-lg-3 col-xm-12">
          <div className="photo-warp mb-1">
          <ImageAnimation/>
 
          </div>
        </div>
        <div className="col-lg-8 col-xm-12">
          <h1 className="about-heading">ABOUT ME</h1>
          <p>
          First and foremost a loving and proud father.

          Besides i also love to create, write, draw,  sing and play guitar.
<br/><br/>
          But beyond that a Self-motivated and a team player 
          with a can-do approach.
          Passion for creativity and web 
          design.
          Eager to learn and grow as a 
          Full-Stack Developer.
          </p>
          <MainHeadline>AND I REALY LOVE TO CODE!</MainHeadline>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
