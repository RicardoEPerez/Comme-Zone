import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container>
      <br />
      <h1>Inicia sesion</h1>
      <p>Solo para clientes registrados y aprovados</p>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="example@example.dot" />
            <Form.Text className="text-muted">
              Nunca compartas tu informacion
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="**********" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recuerdame" />
          </Form.Group>
          <Button variant="primary" as={Link} to="/Manejo">
            Iniciar sesion
          </Button>
        </Form>
      </Container>
    </Container>
  );
}

export default Login;
