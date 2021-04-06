import React from "react";
import "./aboutme.styles.css";
import ProfileImage from "../../images/profile.jpeg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            temporibus mollitia corporis molestias esse commodi amet delectus
            soluta voluptatum sed numquam explicabo culpa inventore. Iure
            dolores repudiandae sequi? Reiciendis dicta assumenda aspernatur
            unde perferendis, cum laudantium esse debitis recusandae odio error
            inventore facilis, minima deserunt quod? Possimus porro praesentium
            quasi?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
