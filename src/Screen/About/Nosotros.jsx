import React from "react";
import { Container } from "react-bootstrap";

const Nosotros = () => {
  return (
    <Container>
      <br />
      <div>
        <img
          src="https://i.ytimg.com/vi/_soVzh9v7cE/maxresdefault.jpg"
          height={300}
          width={600}
          alt=""
          className="d-block w-100"
        />
      </div>
      <br />
      <div className="text-center">
        <h1>¿Quienes somos?</h1>
        <p>Somos una bola de weones boludos awebonados</p>
        <br />
        <h2>¿Por que creamos Comme-Zone?</h2>
        <p>
          Por que no queremos reprobar el semestre por eso hicimos este bodrio
        </p>
        <br />
        <h2>Simple Text</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </Container>
  );
};

export default Nosotros;
