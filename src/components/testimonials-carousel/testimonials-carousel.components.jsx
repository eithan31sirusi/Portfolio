import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//AVATRS IMPORTS
import avatar1 from "../../images/avatars/bill-gates.jpg";
import avatar2 from "../../images/avatars/Dovi_frances.jpg";
import avatar3 from "../../images/avatars/steve-jobs.jpg";
import avatar4 from "../../images/avatars/tshuva.jpg";

import "./testimonials-carousel.styles.css";

const TestimonialCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="Avatar 1" />
        <div className="my-carousel">
          {" "}
          <h3>Avatr 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            illum, suscipit nemo sequi veritatis deleniti?
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Avatar 2" />
        <div className="my-carousel">
          {" "}
          <h3>Avatr 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            illum, suscipit nemo sequi veritatis deleniti?
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="Avatar 3" />
        <div className="my-carousel">
          {" "}
          <h3>Avatr 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            illum, suscipit nemo sequi veritatis deleniti?
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt="Avatar 4" />
        <div className="my-carousel">
          {" "}
          <h3>Avatr 4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            illum, suscipit nemo sequi veritatis deleniti?
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialCarousel;
