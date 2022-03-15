import React from "react";

import "./circleAnimation.css";

const circleAnimation = (props) => {
  return (
    <div className="main">
      <div className="circle_3"></div>
      <div className="circle_4"></div>
      <div className="circle_5"></div>
      <div className="circle_6"></div>
      {props.children}
    </div>
  );
};

export default circleAnimation;
