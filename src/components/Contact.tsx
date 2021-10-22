import React from "react";
import { Container } from "react-bootstrap";
import Title from "./Title";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Helmet } from "react-helmet";
import {useHasMounted} from "../hooks/useHasMounted";

const Contact = () => {
  return (
    <>
     
      <section id="contact">
        <Title title="Contact" />
        <Container>
          <p className="lead text-center mt-3 mb-3 mb-lg-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            voluptatem.
          </p>
          
        </Container>
      </section>
    </>
  );
};

export default Contact;
