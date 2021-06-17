/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="pt-150">
    <footer>
      <div className="d-flex justify-content-between align-items-end">
        <div className="pe-3 pt-2">
          <Link to="/" className="title-footer">GluciCalc</Link>
          <p className="pt-2">© 2021 GluciCalc</p>
        </div>
        <p className="text-end">Carole Meney, Arnaud Gossard, Martin Forget et Morgane Tessier</p>
      </div>
    </footer>
  </div>
);

export default Footer;
