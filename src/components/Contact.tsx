import React from "react";
import { Container } from "react-bootstrap";
import Title from "./Title";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Helmet } from "react-helmet";
import { useHasMounted } from "../hooks/useHasMounted";

const Contact = () => {
  const isUseHasMounted = useHasMounted();

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
      </Helmet>
      <section id="contact">
        <Title title="Contact" />
        <Container>
          <p className="lead text-center mt-3 mb-3 mb-lg-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            voluptatem.
          </p>
          {isUseHasMounted && (
            <MapContainer
              center={[50.21376, 8.56605]}
              zoom={15}
              scrollWheelZoom={false}
              style={{ height: "400px" }}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[50.21376, 8.56605]}>
                <Popup>Restaurant Midang</Popup>
              </Marker>
            </MapContainer>
          )}
        </Container>
      </section>
    </>
  );
};

export default Contact;
