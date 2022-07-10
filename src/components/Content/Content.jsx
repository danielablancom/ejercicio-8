import React from 'react'; 
import "../Content/Content.css"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const Content = () => {
  return (
      <Container className='container__text'>
    <Row className="container__section">
            <div>
                <h2>Agregamos valor con servicios y soluciones que potencian el funcionamiento y la calidad de las
                    aplicaciones.</h2>
                <p>Nuestras líneas de negocio evidencian la experticia que tenemos como equipo de profesionales y
                    técnicos
                    especializados en las tecnologías más avanzadas para el desarrollo de servicios y soluciones a la
                    medida
                    de cada cliente.</p>
            </div>
        </Row>
        </Container>
  )
}

export default Content