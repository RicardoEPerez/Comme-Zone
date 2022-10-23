import ListGroup from "react-bootstrap/ListGroup";

function Categorias() {
  return (
    <ListGroup>
      <ListGroup.Item variant="dark">Categorias</ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Desarmadores
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Pinzas
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Maquinaria
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Taladros
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Ardillas
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Plomeria
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Electricidad
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Mecanica
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Categorias;
