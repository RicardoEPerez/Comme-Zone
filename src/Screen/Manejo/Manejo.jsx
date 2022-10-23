import { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Formato3 from "../../Components/Formato3/Formato3";

function Manejo() {
  const [ver, setVer] = useState(false);
  const [ver2, setVer2] = useState(false);
  const [ver3, setVer3] = useState(false);
  const [ver4, setVer4] = useState(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const agregar = () => {
    handleClose();
    setVer4(false);
  };

  return (
    <Container>
      <br />
      <h1>Manejo de inventario</h1>
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Descripcion larga</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ver3 ? (
            ""
          ) : (
            <tr>
              <td>Patin de Jebus</td>
              <td> Patin sagrado +5 en bendicion</td>
              <td>10</td>
              <td>25000</td>
              <td>
                <Button variant="warning" onClick={handleShow2}>
                  Editar
                </Button>
                ­ ­
                <Button variant="danger" onClick={() => setVer3(true)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          )}

          {ver2 ? (
            ""
          ) : (
            <tr>
              <td>Caja cuadrada</td>
              <td>Caja cuadrada cafe</td>
              <td>2000</td>
              <td>1</td>
              <td>
                <Button variant="warning" onClick={handleShow2}>
                  Editar
                </Button>
                ­ ­
                <Button variant="danger" onClick={() => setVer2(true)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          )}
          {ver ? (
            ""
          ) : (
            <tr>
              <td>Pelota cuadrada</td>
              <td>La misma que usa Kiko</td>
              <td>100</td>
              <td>58120</td>
              <td>
                <Button variant="warning" onClick={handleShow2}>
                  Editar
                </Button>
                ­ ­
                <Button variant="danger" onClick={() => setVer(true)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          )}
          {ver4 ? (
            ""
          ) : (
            <tr>
              <td>Cosa cososa</td>
              <td>Un cosa weastica</td>
              <td>800</td>
              <td>520</td>
              <td>
                <Button variant="warning" onClick={handleShow2}>
                  Editar
                </Button>
                ­ ­
                <Button variant="danger" onClick={() => setVer(true)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <Button variant="success" onClick={handleShow}>
        Agregar producto
      </Button>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={true}
          variant="dark"
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-dark">Agregar producto</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-dark">
            <Formato3 />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="dark" onClick={() => agregar()}>
              Agregar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Modal
          show={show2}
          onHide={handleClose2}
          backdrop="static"
          keyboard={true}
          variant="dark"
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-dark">Editar datos</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-dark">
            <Formato3 />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose2}>
              Cancelar
            </Button>
            <Button variant="dark" onClick={handleClose2}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  );
}

export default Manejo;
