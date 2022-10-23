import Carousel from "react-bootstrap/Carousel";
import kit from "../../assets/Pictures/CarruselDS/kit.jpg"
import pony from "../../assets/Pictures/CarruselDS/Myl.jpg"

function Carrusel3() {
  return (
    <Carousel variant="dark" fade>
      <Carousel.Item interval={1200}>
        <img
          width={400}
          height={300}
            alt="900x500"
            className="d-block w-100"
          src={kit}
        />
        <Carousel.Caption className="text-light">
          <h3 >Kit de dados con matraca</h3>
          <p>Importado desde alemania aprovado por nuestro amado führer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1200}>
        <img
          width={400}
          height={300}
          alt="900x500"
          className="d-block w-100"
          src={pony}
        />
        <Carousel.Caption>
          <h3>Cinta americana</h3>
          <p>Cinta americana de edicion especial por aniversario de My Little Pony.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1200}>
        <img
          width={400}
          height={300}
          alt="900x500"
          className="d-block w-100"
          src="https://i.ytimg.com/vi/OFQQALduhzA/maxresdefault.jpg"
        />
        <Carousel.Caption>
          <h3>Placeholder 3</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel3;
