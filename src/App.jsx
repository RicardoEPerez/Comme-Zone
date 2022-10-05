import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import ToolBar from "./Components/Toolbar/ToolBar";
import Carrusel from "./Components/Carrusel/Carrusel";

function App() {
  return (
    <Container>
      <Container className="text-center">
        <div>
          <h1>Welcome to Comme-Zone</h1>
        </div>
      </Container>
      <ToolBar />
      <br />
      <Carrusel />
    </Container>
  );
}

export default App;
