import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Formato3() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container>
      <div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} ms controlId="validationCustom01">
              <Form.Label>Producto</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Llave nuda"
                Value=""
              />
              <Form.Control.Feedback type="invalid">
                Nombres invalido o faltante
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} ms controlId="validationCustom02">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Llave de cabeza ancha con mango gordo y firme"
                Value=""
              />
              <Form.Control.Feedback type="invalid">
                Apellidos invalido o faltante
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="number" placeholder="10" required />
              <Form.Control.Feedback type="invalid">
                Cantidad invalida o faltante
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" placeholder="$100" required />
              <Form.Control.Feedback type="invalid">
                Cantidad invalida o faltante
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Label>Imagenes</Form.Label>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Control type="file" multiple />
            </Form.Group>
          </Row>
        </Form>
      </div>
    </Container>
  );
}

export default Formato3;
