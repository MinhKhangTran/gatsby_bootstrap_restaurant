import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Unnamed_1_Query } from "../types.generated";
import Title from "./Title";
import { Col, Container, Row } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Mittag = () => {
  const data: Unnamed_1_Query = useStaticQuery(mittagsmenu_query);
  console.log(data.allGraphCmsMittagsmenu.nodes);

  return (
    <section id="mittag" className="">
      <Title title="Mittagsmenü" />
      <Container>
        <p className="lead text-center mt-3">
          Heute haben wir zum Mittag diese Gerichte zur Auswahl
        </p>
        <Row>
          {data.allGraphCmsMittagsmenu.nodes.map((menu) => {
            return (
              <Col key={menu.id} lg={6}>
                <GatsbyImage image={getImage(menu.img)} alt={menu.name} />
                <div className="mittag_wrapper d-flex justify-content-between align-items-center">
                  <h3>{menu.name}</h3>
                  <p className="lead">{menu.price} €</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export const mittagsmenu_query = graphql`
  query Mittag{
    allGraphCmsMittagsmenu(filter: { featured: { eq: true } }) {
      nodes {
        id
        name
        price
        category {
          name
        }
        img {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default Mittag;
