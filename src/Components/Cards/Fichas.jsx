import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Martillo from "../../assets/Pictures/Card general/Martillo.jpg";
import Desarmador from "../../assets/Pictures/Card general/Desarmador.jpeg";
import Alicates from "../../assets/Pictures/Card general/Alicates.jpg";
import CR7 from "../../assets/Pictures/Card general/cr7_.jpg";

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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3F3T1yWKpPzBA4IyaojuQvdMRl3KzUskHPWZIViHh9CbikTfsXqFUIcCRYj1DQ5xjJY&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} bg="dark">
          <Card.Img
            width={150}
            height={150}
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3F3T1yWKpPzBA4IyaojuQvdMRl3KzUskHPWZIViHh9CbikTfsXqFUIcCRYj1DQ5xjJY&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} bg="dark">
          <Card.Img
            width={150}
            height={150}
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3F3T1yWKpPzBA4IyaojuQvdMRl3KzUskHPWZIViHh9CbikTfsXqFUIcCRYj1DQ5xjJY&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} bg="dark">
          <Card.Img
            width={150}
            height={150}
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3F3T1yWKpPzBA4IyaojuQvdMRl3KzUskHPWZIViHh9CbikTfsXqFUIcCRYj1DQ5xjJY&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">Mira el producto</Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Fichas;
