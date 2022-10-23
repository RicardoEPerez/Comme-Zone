import React from "react";
import { Accordion, Container } from "react-bootstrap";
import Formato from "../../Components/Formato/Formato";
import JoinUs from "../../assets/Pictures/about/JoinUs.jpg"
function Join() {
  return (
    <Container>
      <br />
      <img
        src={JoinUs}
        height={300}
        width={600}
        alt=""
        className="d-block w-100"
      />
      <div className="text-center">
        <h1>Como unirser a Comme-Zone</h1>
      </div>
      <div>
        <p>
          Interesado en ser parte de la familia con Comme-Zone, lo unico que
          necesitas es llenar el sigiente formato para comenzar:
        </p>
      </div>
      <Formato />
      <br />

      <h3>Preguntas frecuentes</h3>
      <Accordion className="">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            ¿Puedo unirme sin tener algun acercamiento o conocimiento sobre tecnologia o venta en linea?
          </Accordion.Header>
          <Accordion.Body>
            Claro que si, Comme-zonne se encarga de guiarlo para ser parte de nuestra plataforma.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            ¿A dónde se va la luz cuando se va?
          </Accordion.Header>
          <Accordion.Body>
            Preguntele al tecnico mijo, esta web no hace milagros.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            ¿Ha visto "El señor de los anillos", versioin extendida?
          </Accordion.Header>
          <Accordion.Body>
            Nel muy larga.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
    </Container>
  );
}

export default Join;
