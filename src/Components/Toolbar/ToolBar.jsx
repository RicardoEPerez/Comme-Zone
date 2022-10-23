import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import Logo from '../../assets/Pictures/Logos/LogoP.jpg'


const ToolBar = (change) => {
  return (
    <>
      <br />
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/Main">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
            Comme-Zone
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink as={Link} to="/Nosotros">
                Sobre nosotros
              </NavLink>

              <NavDropdown title="Tiendas Afiliadas" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/DonSaul">
                  Ferreteria Don Saul
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Deporte">
                  Deporterama
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Left">
                  Leftorium
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/Adult">
                  Solo Adultos
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/Join">
                Como unirse
              </Nav.Link>
            </Nav>
            <div>
              <Button
                variant="secondary"
                as={Link}
                to={change ? "/Login" : "/Main"}
              >
                {change ? "Iniciar Sesión" : "Cerrar Sesion"}
              </Button>
            </div>
            ­ ­
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Busca aqui"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="secondary">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>

      <footer>
        <br />
        <div className="text-center">
          <p>Todos los dereches reservados a</p>
          <strong>BocchiBanda Inc.®</strong>
        </div>
      </footer>
    </>
  );
};

export default ToolBar;
