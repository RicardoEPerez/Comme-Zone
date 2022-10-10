import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const ToolBar = () => {
  return (
    <>
      <br />
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/Main">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/08c3597d-04d4-40a2-99a9-856dbc4bb772/dd7og2s-23991bd8-d914-4fcf-9271-2e8359d3f39b.jpg/v1/fill/w_250,h_250,q_70,strp/sonic_wonderbread__by_evergreenplate_dd7og2s-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzA4YzM1OTdkLTA0ZDQtNDBhMi05OWE5LTg1NmRiYzRiYjc3MlwvZGQ3b2cycy0yMzk5MWJkOC1kOTE0LTRmY2YtOTI3MS0yZTgzNTlkM2YzOWIuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.g-gW1zDrfsLD4_DEo9pFNI1rGk7CxbZMk2wN_giYwrI"
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
