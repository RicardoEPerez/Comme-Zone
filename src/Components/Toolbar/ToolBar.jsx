import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { useEffect, useState } from "react";
// import { firebase } from "../../firebase";

const ToolBar = () => {
  
  // const [cDatos, setCDatos] = useState([]);

  // //Consumir el api de firebase
  // useEffect(() => {
  //   const obtenerDatos = async () => {
  //     try {
  //       //Declarar la base de datos de Firebase del tipo FireStore
  //       const db = firebase.firestore()
  //       //Declarar y consumir la coleccion de la base de datos
  //       const data = await db.collection("tareas").get();
  //       //Ver los documentos de la coleccion
  //       console.log("Datos completos de la coleccion", data.docs);
  //       //Consumir los datos de los documentos
  //       const arrayData = data.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       //Ver el contenido de los documentos
  //       console.log("Datos extraidos", arrayData);
  //       setCDatos(arrayData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   obtenerDatos();
  // }, []);

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
              <NavDropdown.Item href="#action/3.3">
                Leftorium
              </NavDropdown.Item>
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
