import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function Formato() {
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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombres</Form.Label>
          <Form.Control required type="text" placeholder="Jose Alma" Value="" />
          <Form.Control.Feedback type="invalid">
            Nombres invalido o faltante
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Marselo Chifla"
            Value=""
          />
          <Form.Control.Feedback type="invalid">
            Apellidos invalido o faltante
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label>Correo</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="example@yahoo.com"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor agrege su correo
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Colonia</Form.Label>
          <Form.Control type="text" placeholder="Col. a" required />
          <Form.Control.Feedback type="invalid">
            Colonia invalida o faltante
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Direccion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Av. Bien venida No.1"
            required
          />
          <Form.Control.Feedback type="invalid">
            Direccion invalida o faltante
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>C.P.</Form.Label>
          <Form.Control type="text" placeholder="66166" required />
          <Form.Control.Feedback type="invalid">
            Codigo postal invalida o faltante
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md="5" controlId="validationCustom05">
          <Form.Label>Nombre del Negocio</Form.Label>
          <Form.Control type="text" placeholder="Pizza Muerte Lenta" required />
          <Form.Control.Feedback type="invalid">
            Empresa faltante o faltante
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Aceptar Terminos y condiciones"
            feedback="Debes aceptar los Terminos y condiciones."
            feedbackType="invalid"
          />
        </Form.Group>
      </Row>
      <Button type="submit">Registrarse</Button>
    </Form>
  );
}

export default Formato;
