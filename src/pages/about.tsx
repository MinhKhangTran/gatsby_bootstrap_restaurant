import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Title from "../components/Title";

const about = () => {
  return (
    <Layout>
      <SEO title="Über Uns" />
      <div id="about">
        <Container>
          <Row>
            <Col lg={6}>
              <StaticImage
                src="../images/about.jpg"
                alt="strahlender chefkoch"
              />
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
              <Title heading title="Über uns" />
              <p className="lead">
                I'm baby kinfolk microdosing you probably haven't heard of them
                shaman air plant iPhone fixie semiotics forage. Health goth
                craft beer direct trade, vexillologist microdosing shabby chic
                gastropub kale chips seitan migas pok pok cold-pressed kombucha
                authentic. Williamsburg hexagon occupy YOLO pour-over jianbing
                aesthetic lomo unicorn taxidermy polaroid sustainable
                kickstarter. Blue bottle street art mumblecore pork belly
                shoreditch. Roof party four loko lo-fi shaman marfa flannel
                tattooed DIY truffaut offal venmo copper mug fanny pack
                scenester. Authentic affogato put a bird on it, pour-over migas
                asymmetrical farm-to-table kickstarter.
              </p>
              <h2>Midang's Besitzer</h2>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default about;
