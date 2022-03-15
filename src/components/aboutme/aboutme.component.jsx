import React from "react";
import "./aboutme.styles.css";
import ProfileImage from "../../images/profile.jpeg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5 " >
      <div className="row " >
        <div className="col-lg-6 col-xm-12">
          <div className="photo-warp mb-5">
            <img
              className="profile-img"
              src={ProfileImage}
              alt="ProfileImage..."
              style={{ width: "250px", height: "250px" }}
            />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
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
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
