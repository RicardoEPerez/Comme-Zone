import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FichasT from "../../Components/CardsT/FichasT";
import Carrusel from "../../Components/Carrusel/Carrusel";
import Categorias from "../../Components/Categorias/Catergorias";

const Don_Saul = () => {
  return (
    <Container>
      <br />
      <Carrusel />
      <br />
      <div>
        <Row>
          <Col sm={3}>
            <Categorias />
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