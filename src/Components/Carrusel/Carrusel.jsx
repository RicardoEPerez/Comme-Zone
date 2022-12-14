import Carousel from "react-bootstrap/Carousel";
import  Deport  from "../../assets/Pictures/Carrusel/deprt.jpg";
import Don from "../../assets/Pictures/Carrusel/Don.jpg";
import Left from "../../assets/Pictures/Carrusel/Leftorium.jpg";

function Carrusel() {
  return (
    <Carousel variant="dark" fade>
      <Carousel.Item interval={1200}>
        <img
          width={400}
          height={300}
            alt="900x500"
            className="d-block w-100"
          src={Don}
        />
        <Carousel.Caption>
          <h3>Ferreterias Don Saul</h3>
          <p>Ferreteria y equipo industrial.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1200}>
        <img
          width={400}
          height={300}
          alt="900x500"
          className="d-block w-100"
          src={Deport}
        />
        <Carousel.Caption>
          <h3>Deporterama</h3>
          <p>Donde messi compro su primer balon.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1200}>
        <img
          width={400}
          height={300}
          alt="900x500"
          className="d-block w-100"
          src={Left}
        />
        <Carousel.Caption>
          <h3>Leftorium</h3>
          <p>
            Perfectirijillo amigillo surdillo.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
