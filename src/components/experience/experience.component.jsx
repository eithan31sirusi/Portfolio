import React from "react";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>EXPERIENCE</h1>
      </div>
      <div className="container experience-warpper">
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2011-2016</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et
              labore ab temporibus facere libero at illum consectetur sequi sunt
              officiis ut ipsa, saepe enim fugiat impedit obcaecati commodi
              optio!
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2016-2017</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et
              labore ab temporibus facere libero at illum consectetur sequi sunt
              officiis ut ipsa, saepe enim fugiat impedit obcaecati commodi
              optio!
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017-2020</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et
              labore ab temporibus facere libero at illum consectetur sequi sunt
              officiis ut ipsa, saepe enim fugiat impedit obcaecati commodi
              optio!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
