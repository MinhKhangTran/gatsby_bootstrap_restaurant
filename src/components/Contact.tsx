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
          {useHasMounted && (
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: "400px" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
        </Container>
      </section>
    </>
  );
};

export default Contact;
