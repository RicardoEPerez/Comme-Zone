import Carousel from "react-bootstrap/Carousel";
import mart1 from "../../assets/Pictures/Card general/Martillo.jpg"
import mart2 from "../../assets/Pictures/Detalles/martillos2.jpg"
import mar3 from "../../assets/Pictures/Detalles/mart3.jpg"

function Carrusel2() {
  return (
    <Carousel variant="dark" fade>
      <Carousel.Item interval={1200}>
        <img
          width={400}
          height={300}
            alt="900x500"
            className="d-block w-100"
          src={mart1}
        />
      </Carousel.Item>
      <Carousel.Item interval={1200}>
        <img
          width={400}
          height={300}
          alt="900x500"
          className="d-block w-100"
          src={mart2}
        />
      </Carousel.Item>
      <Carousel.Item interval={1200}>
        <img
          width={400}
          height={300}
          alt="900x500"
          className="d-block w-100"
          src={mar3}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel2;
