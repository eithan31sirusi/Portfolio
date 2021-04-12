import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { Link } from "react-scroll";
import "./footer.styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>city Rehovot Main st 2021</p>
            </div>
            <div className="d-flex">
              <Link to="tel:1700-700-700">+9721700-700-700</Link>
            </div>
            <div className="d-flex">
              <p>Eithan26sirusi@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" className="footer-nav">
                  HOME
                </Link>
                <br />
                <Link smooth={true} to="about" className="footer-nav">
                  ABOUT ME
                </Link>
                <br />
                <Link smooth={true} to="services" className="footer-nav">
                  SERVICES
                </Link>
              </div>
              <div className="col">
                <Link smooth={true} to="experience" className="footer-nav">
                  EXPERIENCE
                </Link>
                <br />
                <Link smooth={true} to="portfolio" className="footer-nav">
                  PORTFOLIO
                </Link>
                <br />
                <Link smooth={true} to="contacts" className="footer-nav">
                  CONTACTS
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://github.com/eithan31sirusi"}
                quote={"Fullstack-develoer"}
                hashtag={"#javascript"}
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://github.com/eithan31sirusi"}
                quote={"Fullstack-develoer"}
                hashtag={"#javascript"}
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://github.com/eithan31sirusi"}
                quote={"Fullstack-develoer"}
                hashtag={"#javascript"}
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://github.com/eithan31sirusi"}
                quote={"Fullstack-develoer"}
                hashtag={"#javascript"}
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear}&nbsp;|All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
