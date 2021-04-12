import React from "react";
import "./header.style.css";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-warper">
      <div className="main-info">
        <h1>DONT FORGET TO PUT A AWESOME HEADLINE!</h1>
        <Typed
          className="typed-text"
          strings={["Web Design", "Web-Developmant", "Responsive Banners "]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link
          className="btn-main-offer"
          smooth={true}
          to="contacts"
          aria-current="page"
        >
          contact us
        </Link>
      </div>
    </div>
  );
};

export default Header;
