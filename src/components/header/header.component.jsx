import React from "react";
import "./header.style.css";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-warper">
      <div className="main-info">
        <h1>wellcom to E.n.S</h1>
        <h4>Some of what we have to offer...</h4>
        <Typed
          className="typed-text"
          strings={["Web-Developmant", `Using React and React Native`,`Using Node.js with Express.js`,"Web Design","Funny sketch drawing" ]}
          typeSpeed={40}
          backSpeed={40}
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
