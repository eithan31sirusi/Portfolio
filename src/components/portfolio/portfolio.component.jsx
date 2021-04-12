import React from "react";
import "./portfolio.styles.css";
import scketch1 from "../../images/scketches/InkedUntitled-2_LI.jpg";
import scketch2 from "../../images/scketches/junpradox.jpg";
import scketch3 from "../../images/scketches/WP.png";
import scketch4 from "../../images/scketches/cartoon.png";
import { Link } from "react-scroll";
//FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  const openPopupboxScketch1 = () => {
    const content = (
      <>
        <img className="portfolio-image-popubox" src={scketch1} alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          temporibus nostrum quas quam inventore esse ut repellendus iste
          perferendis ullam.
        </p>
        <b>GitHub: </b>
        <Link
          className="hyper-link"
          onClick={() =>
            window.open("https://www.linkedin.com/in/eithansirusi/")
          }
        >
          https://www.linkedin.com/in/eithansirusi/
        </Link>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popuopboxConfigScketch1 = {
    titleBar: {
      enable: true,
      text: "scketch1",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  const openPopupboxScketch2 = () => {
    const content = (
      <>
        <img className="portfolio-image-popubox" src={scketch2} alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          temporibus nostrum quas quam inventore esse ut repellendus iste
          perferendis ullam.
        </p>
        <b>GitHub: </b>
        <Link
          className="hyper-link"
          onClick={() =>
            window.open("https://www.linkedin.com/in/eithansirusi/")
          }
        >
          https://www.linkedin.com/in/eithansirusi/
        </Link>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popuopboxConfigScketch2 = {
    titleBar: {
      enable: true,
      text: "scketch2",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  const openPopupboxScketch3 = () => {
    const content = (
      <>
        <img className="portfolio-image-popubox" src={scketch3} alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          temporibus nostrum quas quam inventore esse ut repellendus iste
          perferendis ullam.
        </p>
        <b>GitHub: </b>
        <Link
          className="hyper-link"
          onClick={() =>
            window.open("https://www.linkedin.com/in/eithansirusi/")
          }
        >
          https://www.linkedin.com/in/eithansirusi/
        </Link>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popuopboxConfigScketch3 = {
    titleBar: {
      enable: true,
      text: "scketch3",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  const openPopupboxScketch4 = () => {
    const content = (
      <>
        <img className="portfolio-image-popubox" src={scketch4} alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          temporibus nostrum quas quam inventore esse ut repellendus iste
          perferendis ullam.
        </p>
        <b>GitHub: </b>
        <Link
          className="hyper-link"
          onClick={() =>
            window.open("https://www.linkedin.com/in/eithansirusi/")
          }
        >
          https://www.linkedin.com/in/eithansirusi/
        </Link>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popuopboxConfigScketch4 = {
    titleBar: {
      enable: true,
      text: "scketch4",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxScketch1}>
            <img src={scketch1} alt="" className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxScketch2}>
            <img src={scketch2} alt="" className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxScketch3}>
            <img src={scketch3} alt="" className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxScketch4}>
            <img src={scketch4} alt="" className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popuopboxConfigScketch1} />
      <PopupboxContainer {...popuopboxConfigScketch2} />
      <PopupboxContainer {...popuopboxConfigScketch3} />
      <PopupboxContainer {...popuopboxConfigScketch4} />
    </div>
  );
};

export default Portfolio;

/* import React from "react";
import PopupBox from "./react-popupbox.component";
import scketch1 from "../../images/scketches/InkedUntitled-2_LI.jpg";
import scketch2 from "../../images/scketches/junpradox.jpg";
import scketch3 from "../../images/scketches/WP.png";
import scketch4 from "../../images/scketches/cartoon.png";

//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


  const openPopupboxScketch1 = () => {
    const content = (
      <>
        <img className="portfolio-image-popubox" src={scketch1} alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          temporibus nostrum quas quam inventore esse ut repellendus iste
          perferendis ullam.
        </p>
        <b>GitHub: </b>
        <Link
          className="hyper-link"
          onClick={() =>
            window.open("https://www.linkedin.com/in/eithansirusi/")
          }
        >
          https://www.linkedin.com/in/eithansirusi/
        </Link>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popuopboxConfigScketch1 = {
    titleBar: {
      enable: true,
      text: "scketch1",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <PopupBox
      openPopupboxScketch1={openPopupboxScketch1}
      popuopboxConfigScketch1={popuopboxConfigScketch1}
    />
  );


export default PopupBox;
<PopupboxContainer {...popuopboxConfigScketch1} /> */
