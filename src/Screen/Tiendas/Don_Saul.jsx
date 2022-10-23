import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FichasT from "../../Components/CardsT/FichasT";
import Carrusel3 from "../../Components/Carrusel3/Carrusel3";
import Categorias from "../../Components/Categorias/Catergorias";

const Don_Saul = () => {
  return (
    <Container>
      <br />
      <Carrusel3 />
      <br />
      <div>
        <Row>
          <Col sm={3}>
            <Categorias />
            <br />
            <div>
              <strong>Direccion:</strong>
              <p>Calle 5 Sur No.1250 Col. Centro</p>
              <strong>Numero telefonico:</strong>
              <p>238 162 1520</p>
            </div>
          </Col>
          <Col sm>
            <FichasT />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Don_Saul;
