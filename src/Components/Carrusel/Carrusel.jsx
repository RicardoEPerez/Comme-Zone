import Carousel from "react-bootstrap/Carousel";

function Carrusel() {
  return (
    <Carousel variant="dark" fade>
      <Carousel.Item interval={1200}>
        <img
          width={400}
          height={300}
          alt="900x500"
          className="d-block w-100"
          src="https://i.imgur.com/RIUC5VT.jpeg"
        />
        <Carousel.Caption>
          <h3>Placeholder 1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1200}>
        <img
          width={400}
          height={300}
          alt="900x500"
          className="d-block w-100"
          src="https://i.ytimg.com/vi/TBfWKmRFTjM/maxresdefault.jpg"
        />
        <Carousel.Caption>
          <h3>Placeholder 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

export default Carrusel;
