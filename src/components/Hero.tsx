import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <section id="hero" className="mt-5">
      <Container>
        <div className="wrapper position-relative border">
          <StaticImage src="../images/hero.png" className="" alt="hero_image" />
          <div className="text_wrapper position-absolute">
            <h1 className="text-white display-1">Restaurant</h1>
            <h2 className="text-white display-2">Koreanische Küche</h2>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
