import React from 'react';
import "../Pilares/Pilares.css"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cloud from "../../assets/cloud-data.png"; 
import computer from "../../assets/computer.png"; 
import protection from "../../assets/protection.png"; 
import software from "../../assets/software-development.png"; 

const Pilares = () => {
  return (
    <>
    <Container className="container-section">
         <Row className="row-container">
             <Col className="container-col">
                 <div className="img-col">
                    <img src={cloud} alt="Cloud y DevOps" />
                 </div>
                 <h3 className="">Cloud & DevOps</h3>
                 <p>En CLM hacemos que la
                    adopción de Cloud y DevOps sea
                    rápida, segura y simple.</p>
             </Col>
             <Col className="container-col">
                <div className="img-col">
                    <img src={software} alt="Desarrollo de software" />
                 </div>
                <h3 className="">Desarrollo de software</h3>
                <p>Construimos aplicaciones resilientes
                    y escalables basados en las mejores
                    prácticas.</p>
            </Col>
            <Col className="container-col">
                <div className="img-col">
                    <img src={protection} alt="Calidad de software" />
                 </div>
                <h3 class ame="">Calidad de software</h3>
                <p>Analizamos los factores claves
                    para lograr una mejor experiencia
                    en tus aplicaciones.</p>
            </Col>
            <Col className="container-col">
                <div className="img-col">
                    <img src={computer} alt="Capacitaciones" />
                 </div>
                <h3 className="">Capacitaciones</h3>
                 <p>Programa de formación adaptado
                    a las necesidades de tu empresa.</p> 
            </Col>
         </Row>
     </Container>
     </>
  )
}

export default Pilares