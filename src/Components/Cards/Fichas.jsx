import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Martillo from "../../assets/Pictures/Card general/Martillo.jpg";
import Desarmador from "../../assets/Pictures/Card general/Desarmador.jpeg";
import Alicates from "../../assets/Pictures/Card general/Alicates.jpg";
import CR7 from "../../assets/Pictures/Card general/cr7_.jpg";
import KOYO from "../../assets/Pictures/Card general/MJ.jpeg"
import Woods from "../../assets/Pictures/Card general/Woods.jpg"
import taza from "../../assets/Pictures/Card general/taza.jpg"
import boo from "../../assets/Pictures/Card general/boo_.jpg"

function Fichas() {


  return (
    <Container fluid>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "15rem" }} bg="dark">
          <Card.Img width={150} height={150} variant="top" src={Martillo} />
          <Card.Body>
            <Card.Title>Martillo</Card.Title>
            <Card.Text>Martillo de cabeza de acero reforzado.</Card.Text>
            <Button variant="secondary" as={Link} to="/Detalles">
              Detalles
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} bg="dark">
          <Card.Img width={150} height={150} variant="top" src={Desarmador} />
          <Card.Body>
            <Card.Title>Desarmador de cruz</Card.Title>
            <Card.Text>Desarmador de acero con punta magnetica.</Card.Text>
            <Button variant="secondary">Detalles</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} bg="dark">
          <Card.Img width={150} height={150} variant="top" src={Alicates} />
          <Card.Body>
            <Card.Title>Alicates</Card.Title>
            <Card.Text>Alicates de acero inoxidable.</Card.Text>
            <Button variant="secondary">Detalles</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} bg="dark">
          <Card.Img width={150} height={150} variant="top" src={CR7} />
          <Card.Body>
            <Card.Title>Balon de CR7</Card.Title>
            <Card.Text>CR7 bro.</Card.Text>
            <Button variant="secondary">Detalles</Button>
          </Card.Body>
        </Card>
      </div>

      <br />

      <div className="d-flex justify-content-around">
        <Card style={{ width: "15rem" }} bg="dark">
          <Card.Img
            width={150}
            height={150}
            variant="top"
            src={KOYO}
          />
          <Card.Body>
            <Card.Title>Tennis de MJ</Card.Title>
            <Card.Text>
              Tennis usados por el afamado cantante Michael Jackson en el documental "Space Jam".
            </Card.Text>
            <Button variant="secondary">Detalles</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} bg="dark">
          <Card.Img
            width={150}
            height={150}
            variant="top"
            src={Woods}
          />
          <Card.Body>
            <Card.Title>TITLEIST Select Newport 2 Putt</Card.Title>
            <Card.Text>
              Palo de golf que utilizaba Tiger Woods para luchar contra su esposa.
            </Card.Text>
            <Button variant="secondary">Detalles</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} bg="dark">
          <Card.Img
            width={150}
            height={150}
            variant="top"
            src={taza}
          />
          <Card.Body>
            <Card.Title>Taza para zurdos</Card.Title>
            <Card.Text>
              Pos la imagen ya lo dice :v.
            </Card.Text>
            <Button variant="secondary">Detalles</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} bg="dark">
          <Card.Img
            width={150}
            height={150}
            variant="top"
            src={boo}
          />
          <Card.Body>
            <Card.Title>Boomerang para zurdos</Card.Title>
            <Card.Text>
              Alch estan raros.
            </Card.Text>
            <Button variant="secondary">Detalles</Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Fichas;
