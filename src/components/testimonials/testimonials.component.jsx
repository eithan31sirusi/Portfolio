import React from "react";
import TestimonialsCarousel from "../testimonials-carousel/testimonials-carousel.components";

import "./testimonials.styles.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>MY CLIENTS</h1>
      <div className="container">
        <div className="testimonials-content">
          <TestimonialsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
