import React from "react";
import { Container } from "react-bootstrap";
import cristal from "../../assets/Pictures/about/aboutUs.jpg"
const Nosotros = () => {
  return (
    <Container>
      <br />
      <div>
        <img
          src={cristal}
          height={300}
          width={600}
          alt=""
          className="d-block w-100"
        />
      </div>
      <br />
      <div className="text-center">
        <h1>¿Quienes somos?</h1>
        <p>un grupo de desarrolladores con ganas de ayudar a la pequeñas tienda especializadas</p>
        <br />
        <h2>¿Por que creamos Comme-Zone?</h2>
        <p>
          Por que queremos dar un pequeño impulso a las tiendas a entrar al e-comerce
        </p>
        <br />
        <h2>Bienvenida</h2>
        <p>
          Comme-Zonne agradece que se adentre a explorar por nuestro sitio y esperamos interes por afiliacion, por su atencion gracias, sientase libre de navegar por nuestro sitio
        </p>
      </div>
    </Container>
  );
};

export default Nosotros;
