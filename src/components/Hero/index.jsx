import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => (
  <Jumbotron fluid className="jumbotron d-flex justify-content-center pb-5">
    <div className="text-center pt-70">
      <h2 className="fs-1 mb-2">Bienvenue sur GluciCalc</h2>
      <p className="mb-3">Facilitez-vous la vie et faites confiance à GluciCalc</p>
      <div className="d-flex justify-content-center flex-wrap">
        <Link to="/login" className="btn-secondary btn-lg mt-2">Je suis</Link>
      </div>
    </div>
  </Jumbotron>
);

export default Hero;
