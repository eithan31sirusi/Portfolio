import React from "react";
import "./MainHeadline.css";

const MainHeadline = (props) => {
  return (
    <div className="center">
      <h1 className="h1_main">{props.children}</h1>
      <h1 className="awesome">
        <p className="nonshowing">.</p>
      </h1>
    </div>
  );
};

export default MainHeadline;
