import React, { useState } from "react";
import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import Carrusel2 from "../../Components/Carrusel2/Carrusel2";
import Formato2 from "../../Components/Formato2/Formato2";

const Detalles = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <br />
      <Row>
        <Col sm>
          <Carrusel2 />
        </Col>
        <Col sm={4}>
          <h2>Martillo</h2>
          <div className="text-center text-success">
            <strong>Disponible</strong>
          </div>
          <div>
            <h5>Cantidad disponible: 150</h5>
          </div>
          <div>
            <Row>
              <Col sm={3}>
                <h4>Costo:</h4>
              </Col>
              <Col>
                <p>$250</p>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col sm={5}>
                <h4>Venta por:</h4>
              </Col>
              <Col>
                <p>PZA</p>
              </Col>
            </Row>
          </div>

          <br />
          <div>
            <Button variant="success" onClick={handleShow}>
              Reserva
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={true}
              variant="dark"
            >
              <Modal.Header closeButton>
                <Modal.Title className="text-dark">
                  Realice reservacion
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="text-dark">
                <Formato2 />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="dark" onClick={handleClose}>
                  Reservar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Col>
      </Row>
      <br />
      <div>
        <h5>Detalles del producto</h5>
        <br />
        <p>
        Martillo de cabeza de acero reforzado y uña recta.
        </p>
      </div>
    </Container>
  );
};

export default Detalles;
