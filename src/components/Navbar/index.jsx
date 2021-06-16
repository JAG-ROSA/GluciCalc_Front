import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const auth = useSelector((store) => store.isLogged);

  return (
    <header>
      <nav>
        <div className="d-flex justify-content-between align-items-baseline nav">
          <input type="checkbox" id="nav-check" />
          <h1><Link to="/">GluciCalc</Link></h1>
          <div className="nav-btn pt-3 pe-4">
            <label htmlFor="nav-check">
              <span>{/* // eslint-disable-next-line react/self-closing-comp */}</span>
              <span>{/* // eslint-disable-next-line react/self-closing-comp */}</span>
              <span>{/* // eslint-disable-next-line react/self-closing-comp */}</span>
            </label>
          </div>
          <ul className="d-flex nav-links">
            {!auth ? (
              <li className="ms-3">
                <Link to="/login">Se connecter</Link>
              </li>
            ) : (
              <>
                <li className="ms-3">
                  <Link to="/user/me">Mon dashboard</Link>
                </li>
                <li className="ms-3">
                  <Link to="/logout">Se déconnecter</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
