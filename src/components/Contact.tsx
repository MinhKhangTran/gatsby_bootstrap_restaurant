import React, { useState } from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Button,
} from "react-bootstrap";
import Title from "./Title";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Helmet } from "react-helmet";
import { useHasMounted } from "../hooks/useHasMounted";

const Contact = () => {
  const isUseHasMounted = useHasMounted();
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e: any): void => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

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
          <Row>
            <Col lg={6}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="contact_form">
                  <Col lg={6}>
                    <FloatingLabel
                      className="mb-4"
                      controlId="floatingFirstName"
                      label="Vorname"
                    >
                      <Form.Control
                        required
                        type="text"
                        placeholder="Vorname"
                      />
                      <Form.Control.Feedback type="invalid">
                        Bitte geben Sie einen Vornamen an
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                  <Col lg={6}>
                    <FloatingLabel
                      className="mb-4"
                      controlId="floatingLastName"
                      label="Nachname"
                    >
                      <Form.Control
                        required
                        type="text"
                        placeholder="Nachname"
                      />
                      <Form.Control.Feedback type="invalid">
                        Bitte geben Sie einen Nachnamen an
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                  <Col lg={12} className="mx-auto">
                    <FloatingLabel
                      controlId="floatingEmail"
                      label="E-mail Adresse"
                      className="mb-4"
                    >
                      <Form.Control
                        required
                        type="email"
                        placeholder="name@beispiel.de"
                      />
                      <Form.Control.Feedback type="invalid">
                        Bitte geben Sie eine E-Mail an
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                  <Col lg={12} className="mx-auto">
                    <FloatingLabel controlId="floatingTextarea" label="Message">
                      <Form.Control
                        required
                        as="textarea"
                        placeholder="Hinterlasse eine Nachricht hier"
                        style={{ height: "150px" }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Bitte geben Sie eine Nachricht ein
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                  <Col lg={12} className="mx-auto">
                    <Button
                      type="submit"
                      variant="danger"
                      className="mt-4 mb-4 mb-lg-0"
                    >
                      Abschicken
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col lg={6}>
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
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
