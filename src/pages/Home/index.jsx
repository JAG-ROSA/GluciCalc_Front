import React from "react";
import {
  Row, Col, Container,
} from "react-bootstrap";
import Hero from "components/Hero";
import HomeCard from "components/HomeCard";

const Home = () => (
  <div className="Home">
    <Hero />
    <Container fluid>
      <h3 className="text-center">GluciCalc</h3>
      <Row>
        <Col>
          <HomeCard
            image="test"
            title="Estimez en toute simplicité"
            description="Fini la calculatrice et le papier, estimez rapidement vos apports en glucide et suivez votre alimentation au jour. Profitez de la vie sans aucune contrainte "
          />
        </Col>
        <Col>
          <HomeCard
            title="Créez vos propres recettes"
            description="La cuisine n'a de limite que votre imagination! Créez vos propre recettes grâce à notre interface simplifiée"
          />
        </Col>
        <Col>
          <HomeCard
            title="Partagez avec le monde"
            description="Parcequ'il est toujours plus agréable de partager un bon plat, partagez vos créations ou vos trouvailles avec vos ami(e)s"
          />
        </Col>
      </Row>
      <h3 className="text-center">GluciCalc en quelques vues</h3>
      <Row>
        <Col>
          <HomeCard title="Estimez vos apports" description="Test" />
        </Col>
        <Col>
          <HomeCard title="Estimez vos apports" description="Test" />
        </Col>
        <Col>
          <HomeCard title="Estimez vos apports" description="Test" />
        </Col>
        <Col>
          <HomeCard title="Estimez vos apports" description="Test" />
        </Col>
      </Row>
      <button className="btn-secondary d-flex justify-content-center" type="button">
        Voir plus
      </button>
    </Container>
  </div>
);

export default Home;
