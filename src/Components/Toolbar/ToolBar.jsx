import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const ToolBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/src/App.jsx">Comme-Zone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/src/Componentes/About/Nosotros.jsx">
              Sobre nosotros
            </Nav.Link>
            <NavDropdown title="Tiendas Afiliadas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Ferreteria Don Saul
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Deporterama
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Leftorium</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Solo Adultos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Como unirse</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ToolBar;
