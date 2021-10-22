import React, { useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import Title from "./Title";

const Corona = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section id="corona">
      <Title title="Corona" />
      <Container>
        <p className="lead text-center mt-3 mb-3 mb-lg-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
          voluptatem.
        </p>
        <div className="corona_wrapper d-flex justify-content-center">
          <Button variant="danger" className="" onClick={handleShow}>
            Mehr Informationen zu unsere Corona Maßnahmen
          </Button>
        </div>
      </Container>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Unsere Corona Maßnahmen</Modal.Title>
        </Modal.Header>
        <Modal.Body scrollable>
          <ol>
            <li className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              fugit ad cum adipisci quos sed, eaque consequatur corporis
              officiis cupiditate esse minima animi quidem porro consequuntur?
              Deserunt, voluptatibus ipsam unde ea voluptates nisi enim facilis?
              Consectetur ullam voluptas quis minima minus eos dolorem id
              incidunt. Facere, autem, mollitia asperiores vitae fugiat dicta
              quis minima modi iure, eum ipsam soluta explicabo.{" "}
            </li>
            <li className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              fugit ad cum adipisci quos sed, eaque consequatur corporis
              officiis cupiditate esse minima animi quidem porro consequuntur?
              Deserunt, voluptatibus ipsam unde ea voluptates nisi enim facilis?
              Consectetur ullam voluptas quis minima minus eos dolorem id
              incidunt. Facere, autem, mollitia asperiores vitae fugiat dicta
              quis minima modi iure, eum ipsam soluta explicabo.{" "}
            </li>
            <li className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              fugit ad cum adipisci quos sed, eaque consequatur corporis
              officiis cupiditate esse minima animi quidem porro consequuntur?
              Deserunt, voluptatibus ipsam unde ea voluptates nisi enim facilis?
              Consectetur ullam voluptas quis minima minus eos dolorem id
              incidunt. Facere, autem, mollitia asperiores vitae fugiat dicta
              quis minima modi iure, eum ipsam soluta explicabo.{" "}
            </li>
            <li className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              fugit ad cum adipisci quos sed, eaque consequatur corporis
              officiis cupiditate esse minima animi quidem porro consequuntur?
              Deserunt, voluptatibus ipsam unde ea voluptates nisi enim facilis?
              Consectetur ullam voluptas quis minima minus eos dolorem id
              incidunt. Facere, autem, mollitia asperiores vitae fugiat dicta
              quis minima modi iure, eum ipsam soluta explicabo.{" "}
            </li>
            <li className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              fugit ad cum adipisci quos sed, eaque consequatur corporis
              officiis cupiditate esse minima animi quidem porro consequuntur?
              Deserunt, voluptatibus ipsam unde ea voluptates nisi enim facilis?
              Consectetur ullam voluptas quis minima minus eos dolorem id
              incidunt. Facere, autem, mollitia asperiores vitae fugiat dicta
              quis minima modi iure, eum ipsam soluta explicabo.{" "}
            </li>
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Corona;
