import React from "react";
import { Jumbotron } from "react-bootstrap";

const Hero = () => (
  <Jumbotron fluid className="jumbotron">
    <div className="maring-sides jumbotron-content">
      <h2 className="display-4 mb-2">Bienvenue sur GluciCalc</h2>
      <p className="fs-5 mb-3">Gagnez du temps et calculer vos glucides en quelques clics !</p>
      <div className="mt-3">
        <a href="#video" className="my-btn my-btn-tertiary my-btn-lg">Découvrez-vite !</a>
      </div>
    </div>
  </Jumbotron>
);

export default Hero;
