import React from "react";
import "./header.style.css";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-warper">
      <div className="main-info">
        <h1>DONT FORGET TO PUT A AWESOME HEADLINE!</h1>
        <Typed
          className="typed-text"
          strings={["Web Design", "Web-Developmant", "Responsive Banners "]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          contact us
        </a>
      </div>
    </div>
  );
};

export default Header;
