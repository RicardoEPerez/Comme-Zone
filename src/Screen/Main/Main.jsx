import React from 'react'
import { Container } from 'react-bootstrap';
import Fichas from '../../Components/Cards/Fichas';
import Carrusel from '../../Components/Carrusel/Carrusel'

const Main = () => {
  return (
    <Container>
       <Container className="text-center">
       </Container>
       <br />
       <Carrusel />
       <br />
       <Fichas/>
       <br />
     </Container>
  )
}

export default Main