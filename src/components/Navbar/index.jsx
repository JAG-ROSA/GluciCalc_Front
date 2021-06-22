import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "components/SearchBar";

const Navbar = () => {
  const auth = useSelector((store) => store.isLogged);
  const location = useLocation();
  console.log(location.pathname);

  return (
    <header>
      <nav>
        <div className="d-flex justify-content-between align-items-center nav">
          <input type="checkbox" id="nav-check" />
          <h1><Link to="/">GluciCalc</Link></h1>
          {(location.pathname !== "/search")
            && (
              <div className="col">
                <SearchBar />
              </div>
            )}
          <ul className="d-flex nav-links">
            {!auth ? (
              <li className="ms-3">
                <Link to="/login">Se connecter</Link>
              </li>
            ) : (
              <>
                <li className="ms-3">
                  <Link to="/my-meals">Mes repas</Link>
                </li>
                <li className="ms-3">
                  <Link to="/dashboard">Mon dashboard</Link>
                </li>
                <li className="ms-3">
                  <Link to="/logout">Se déconnecter</Link>
                </li>
              </>
            )}
          </ul>
          <div className="nav-btn pt-3 pe-4">
            <label htmlFor="nav-check">
              <span>{/* // eslint-disable-next-line react/self-closing-comp */}</span>
              <span>{/* // eslint-disable-next-line react/self-closing-comp */}</span>
              <span>{/* // eslint-disable-next-line react/self-closing-comp */}</span>
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
