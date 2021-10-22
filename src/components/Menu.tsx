import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { MenuQuery } from "../types.generated";
import Title from "./Title";
import { Col, Container, Row, Button } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Menu = () => {
  const data: MenuQuery = useStaticQuery(query);

  const categoryArray = [
    "alle",
    ...new Set(
      data.allGraphCmsMittagsmenu.nodes.map((category) => {
        return category.category?.name;
      })
    ),
  ];

  const cloneMenuArray = [...data.allGraphCmsMittagsmenu.nodes];
  const [items, setItems] = useState(cloneMenuArray);

  const filterItems = (category: string) => {
    if (category === "alle") {
      setItems(cloneMenuArray);
      return;
    }
    const filteredMenu = cloneMenuArray.filter((menu) => {
      return menu.category!.name === category;
    });

    setItems(filteredMenu);
  };

  return (
    <section id="menu">
      <Title title="Unser Menü" />
      <Container>
        <p className="lead text-center mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, rem.
        </p>
        <div className="menu_cat_wrapper d-flex justify-content-center flex-wrap mb-3">
          {categoryArray.map((category, index) => {
            return (
              <Button
                key={index}
                variant="transparent"
                className="menu_category text-capitalize"
                onClick={() => {
                  filterItems(category!);
                }}
              >
                {category}
              </Button>
            );
          })}
        </div>

        <Row className="">
          {items.map((menu) => {
            return (
              <Col className="px-lg-5" key={menu.id} lg={6}>
                <GatsbyImage
                  className="rounded"
                  image={getImage(menu.img)}
                  alt={menu.name}
                />
                <div className="mittag_wrapper mt-2 mb-4 d-flex justify-content-between align-items-center">
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

export const query = graphql`
  query Menu {
    allGraphCmsMittagsmenu {
      nodes {
        id
        name
        price
        category {
          name
        }
        img {
          gatsbyImageData
        }
      }
    }
  }
`;

export default Menu;
