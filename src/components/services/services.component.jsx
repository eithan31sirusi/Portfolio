import React from "react";
import "./services.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5">MY SERVICES </h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6  col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Web Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, modi.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6  col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                dolor adipisci culpa tempora atque quidem.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6  col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faFacebookF}
                  size="2x"
                />
              </div>
              <h3>Facebook Ads SMM</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                voluptatibus aliquid alias accusamus iusto assumenda.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6  col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
              </div>
              <h3>Goodle Ads</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum
                id laboriosam exercitationem, ut neque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
