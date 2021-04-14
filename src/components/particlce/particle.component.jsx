import React from "react";
import "./particlce.styles.css";
import Particles from "react-particles-js";

const Particle = () => {
  return (
    <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            denstiy: {
              ebable: true,
              value_area: 900,
            },
          },
          shape: {
            stroke: {
              width: 6,
            },
          },
        },
      }}
    />
  );
};

export default Particle;
