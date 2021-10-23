import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <section id="hero" className="mt-5">
      <Container>
        <div className="wrapper position-relative border">
          <StaticImage src="../images/hero.png" className="" alt="hero_image" />
          <div className="text_wrapper position-absolute text-center">
            <h1 className="text-white heading-1">Restaurant</h1>
            <p className="text-white subtitle">Koreanische Küche</p>
          </div>
        </div>
        <div className="uhrzeit mt-5 mx-auto border border-danger border-3 p-3">
          <p className="lead text-center fw-bold">
            Usastraße 25, 61440 Oberursel
          </p>
          <p className="lead">Öffnungszeiten:</p>
          <div className="lead zeile d-flex justify-content-between">
            <p>Mo</p>
            <div className="zeiten">
              <p>12:00 - 14:30 Uhr</p>
              <p>18:00 - 22:30 Uhr</p>
            </div>
          </div>
          <div className="lead zeile d-flex justify-content-between">
            <p>Di</p>
            <div className="zeiten">
              <p>Ruhetag</p>
            </div>
          </div>
          <div className="lead zeile d-flex justify-content-between">
            <p>Mi - So</p>
            <div className="zeiten">
              <p>12:00 - 14:30 Uhr</p>
              <p>18:00 - 22:30 Uhr</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
