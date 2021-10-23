import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import { useStaticQuery, graphql } from "gatsby";
import { GalleryQuery } from "../types.generated";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const Gallery = () => {
  const data: GalleryQuery = useStaticQuery(query);

  return (
    <section id="gallery">
      <Title title="Gallerie" />
      <Container>
        <p className="lead text-center mt-3 mb-3 mb-lg-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
          voluptatem.
        </p>

        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="">
              {data.allGraphCmsGallery.edges.map((node) => {
                return (
                  <Col key={node.node.id} className="py-2" lg={3} md={4}>
                    <a href={node.node.img?.url}>
                      <GatsbyImage
                        image={getImage(node.node.img)}
                        alt={node.node.alt}
                      />
                    </a>
                  </Col>
                );
              })}
            </Row>
          </SRLWrapper>
        </SimpleReactLightbox>
      </Container>
    </section>
  );
};

export const query = graphql`
  query Gallery {
    allGraphCmsGallery {
      edges {
        node {
          alt
          img {
            gatsbyImageData(placeholder: TRACED_SVG, height: 450, width: 600)
            url
          }
          id
        }
      }
    }
  }
`;

export default Gallery;
