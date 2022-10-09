import React from "react";
import { Accordion, Container } from "react-bootstrap";
import Formato from "../../Components/Formato/Formato";

function Join() {
  return (
    <Container>
      <br />
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/607cd3aa-cb93-4adb-b5bf-e1b58961e309/dd8vzcq-2556d766-a947-40de-921c-84bdb6e4638c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYwN2NkM2FhLWNiOTMtNGFkYi1iNWJmLWUxYjU4OTYxZTMwOVwvZGQ4dnpjcS0yNTU2ZDc2Ni1hOTQ3LTQwZGUtOTIxYy04NGJkYjZlNDYzOGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5cnxVvNm8XlvZLRm_Bok80JxdC0Uvb4__CerHWkGxYs"
        height={300}
        width={600}
        alt=""
        className="d-block w-100"
      />
      <div className="text-center">
        <h1>Como uniser a Comme-Zone</h1>
      </div>
      <div>
        <p>
          Interesado en ser parte de la familia con Comme-Zone, lo unico que
          necesitas es llenar el sigiente formato para comenzar
        </p>
      </div>
      <Formato />
      <br />

      <h3>Preguntas frecuentes</h3>
      <Accordion className="">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Si nosotros contamos ovejas para dormir, ¿qué cuentan los ovejas?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            ¿A dónde se va la luz cuando se va?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            ¿Estaba muerto cuando lo mató? y ¿Quien fue?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
    </Container>
  );
}

export default Join;
