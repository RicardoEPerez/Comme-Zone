import ListGroup from "react-bootstrap/ListGroup";

function Categorias() {
  return (
    <ListGroup>
      <ListGroup.Item variant="dark">Categorias</ListGroup.Item>
      <ListGroup.Item  action variant="secondary">Isekai</ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Aventura
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Ecchi
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Mecha
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Futanari
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Shonnen
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Shoujou
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Seinen
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Categorias;
