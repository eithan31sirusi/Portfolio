import React from "react";

import "./ChangeImage.css";

import profileImage from "../images/profile.jpeg";

const ChangeImage = () => {
  return (
    <div className="image_container">
      <div class="father-div">
        <img
          className="profile_image"
          src={profileImage}
          alt="ProfileImage..."
          style={{ width: "250px", height: "250px" }}
        />
      </div>
    </div>
  );
};

export default ChangeImage;
