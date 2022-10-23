import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Martillo1 from "../../assets/Pictures/Card general/Martillo.jpg"
import Desarmador1 from "../../assets/Pictures/Card general/Desarmador.jpeg"
import Alicate1 from "../../assets/Pictures/Card general/Alicates.jpg"
import Kit1 from "../../assets/Pictures/CarruselDS/kit.jpg"
import Myl1 from "../../assets/Pictures/CarruselDS/Myl.jpg"
import Tra1 from "../../assets/Pictures/CarruselDS/Tra.jpg"

function FichasT() {
  return (
    <Container fluid>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "15rem" }} bg="dark">
          <Card.Img
            width={150}
            height={150}
            variant="top"
            src={Martillo1}
            />
          <Card.Body>
            <Card.Title>Martillo</Card.Title>
            <Card.Text>
              Martillo de cabeza de acero.
            </Card.Text>
            <Button variant="secondary" as={Link} to="/Detalles">Detalles</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} bg="dark">
          <Card.Img
            width={150}
            height={150}
            variant="top"
            src={Desarmador1} 
            />
          <Card.Body>
            <Card.Title>Desarmador de cruz</Card.Title>
            <Card.Text>
            Desarmador de acero con punta magnetica.
            </Card.Text>
            <Button variant="secondary">Detalles</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} bg="dark">
          <Card.Img
            width={150}
            height={150}
            variant="top"
            src={Alicate1}
             />
          <Card.Body>
            <Card.Title>Alicates</Card.Title>
            <Card.Text>
            Alicates de acero inoxidable.
            </Card.Text>
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
            src={Kit1}
            />
          <Card.Body>
            <Card.Title>Kit de dados de matraca</Card.Title>
            <Card.Text>
            Importado desde alemania aprobado por nuestro amado führer.
            </Card.Text>
            <Button variant="secondary">Detalles</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} bg="dark">
          <Card.Img
            width={150}
            height={150}
            variant="top"
            src={Myl1}
            />
          <Card.Body>
            <Card.Title>Cinta americana</Card.Title>
            <Card.Text>
            Cinta americana de edicion especial por aniversario de My Little Pony.
            </Card.Text>
            <Button variant="secondary">Detalles</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} bg="dark">
          <Card.Img
            width={150}
            height={150}
            variant="top"
            src={Tra1}
            />
          <Card.Body>
            <Card.Title>Tractor</Card.Title>
            <Card.Text>
              Tractor de uso rudo americano.
            </Card.Text>
            <Button variant="secondary">Detalles</Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default FichasT;
