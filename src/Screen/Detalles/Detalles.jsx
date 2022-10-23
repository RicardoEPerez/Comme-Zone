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
          <h2>Producto Placeholder</h2>
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
                <p>$1520</p>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id
          faucibus nisl tincidunt. Lectus quam id leo in vitae turpis massa sed.
          Malesuada fames ac turpis egestas integer eget aliquet nibh praesent.
          Donec enim diam vulputate ut pharetra sit amet. Fermentum odio eu
          feugiat pretium nibh ipsum consequat nisl vel. Nulla facilisi morbi
          tempus iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies
          leo integer malesuada nunc vel. Justo donec enim diam vulputate ut
          pharetra sit amet aliquam. Suscipit adipiscing bibendum est ultricies
          integer quis auctor. Vitae suscipit tellus mauris a diam maecenas sed
          enim. Vulputate eu scelerisque felis imperdiet. Nisi scelerisque eu
          ultrices vitae auctor eu augue ut. Felis donec et odio pellentesque
          diam. Velit egestas dui id ornare arcu odio ut. Faucibus in ornare
          quam viverra orci sagittis eu volutpat odio. Interdum velit laoreet id
          donec ultrices tincidunt. Fermentum posuere urna nec tincidunt
          praesent semper feugiat nibh. A pellentesque sit amet porttitor eget.
          Purus sit amet luctus venenatis lectus magna fringilla urna. Fames ac
          turpis egestas maecenas pharetra convallis. Dapibus ultrices in
          iaculis nunc sed augue lacus viverra. Lorem donec massa sapien
          faucibus et molestie ac feugiat sed. Consectetur adipiscing elit ut
          aliquam purus sit amet. Tempus imperdiet nulla malesuada pellentesque
          elit eget gravida. Pellentesque sit amet porttitor eget dolor morbi
          non arcu risus. Ut faucibus pulvinar elementum integer enim neque.
          Gravida cum sociis natoque penatibus et. Nunc id cursus metus aliquam
          eleifend mi in nulla. Amet aliquam id diam maecenas. Quam pellentesque
          nec nam aliquam sem. Eros in cursus turpis massa tincidunt dui ut
          ornare lectus. Lacus vestibulum sed arcu non odio euismod. In dictum
          non consectetur a erat nam at lectus urna. Dictumst quisque sagittis
          purus sit. In vitae turpis massa sed elementum tempus egestas sed sed.
          Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum.
          Sodales neque sodales ut etiam sit amet nisl purus. Sed odio morbi
          quis commodo odio aenean sed adipiscing diam. Augue neque gravida in
          fermentum et sollicitudin ac orci phasellus. Nibh mauris cursus mattis
          molestie a iaculis at erat pellentesque. Scelerisque purus semper eget
          duis at tellus at urna condimentum. Lectus vestibulum mattis
          ullamcorper velit. Malesuada pellentesque elit eget gravida. Iaculis
          at erat pellentesque adipiscing commodo elit at imperdiet dui. Lorem
          ipsum dolor sit amet consectetur adipiscing elit. Ornare massa eget
          egestas purus viverra accumsan. Dictum non consectetur a erat nam at
          lectus urna duis. Ullamcorper malesuada proin libero nunc. In aliquam
          sem fringilla ut morbi tincidunt. Leo duis ut diam quam nulla. Auctor
          augue mauris augue neque gravida in fermentum. Ac tortor dignissim
          convallis aenean et tortor at. At imperdiet dui accumsan sit amet
          nulla facilisi. Mi quis hendrerit dolor magna eget est. Cras ornare
          arcu dui vivamus. Commodo odio aenean sed adipiscing diam donec
          adipiscing tristique. Consequat mauris nunc congue nisi vitae suscipit
          tellus mauris a. Dolor purus non enim praesent elementum facilisis.
          Sed odio morbi quis commodo. Sagittis vitae et leo duis. Vulputate
          dignissim suspendisse in est ante in. Faucibus interdum posuere lorem
          ipsum dolor sit. Enim blandit volutpat maecenas volutpat blandit
          aliquam etiam.
        </p>
      </div>
    </Container>
  );
};

export default Detalles;
