import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";
import { UserManager, UiManager } from "services";
import { resetErrors } from "store";
import store from "store/store";
import Button from "components/Button";

const Login = () => {
  const isLoginSuccess = useSelector((loginstore) => loginstore.isLogged);
  const history = useHistory();
  const isLoginFailed = useSelector((loginstore) => !!loginstore.loginError);
  const location = useLocation();

  const getQueryVariable = (variable) => {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i += 1) {
      const pair = vars[i].split("=");
      if (decodeURIComponent(pair[0]) === variable) {
        return decodeURIComponent(pair[1]);
      }
    }
    return null;
  };

  const getRedirectUrl = () => getQueryVariable("redirectUrl") ?? location.state?.redirectUrl ?? "/my-meals";

  useEffect(() => {
    if (isLoginSuccess) {
      UiManager.openNotification("success", "Connexion réussie ! 😉");
      history.push(getRedirectUrl());
    } else if (isLoginFailed) {
      UiManager.openNotification(
        "error",
        "Hum... il y a une petite erreur ! 🤔",
      );
      store.dispatch(resetErrors());
    }
  }, [isLoginSuccess, isLoginFailed]);

  const loginFetch = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.formBasicEmail.value,
      password: event.target.formBasicPassword.value,
    };
    UserManager.loginUser(data.email, data.password);
  };

  return (
    <div className="d-flex justify-content-center slide-left">
      <div className="col-sm-10 col-md-8 col-lg-5 border-shadow p-5 mt-5">
        <h2 className="my-text-primary pb-3">Se connecter</h2>

        <Form onSubmit={loginFetch}>
          <Form.Group controlId="formBasicEmail" className="fs-6 pb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="nom@exemple.com" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="fs-6 pb-3">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" placeholder="Mot de passe" />
          </Form.Group>

          <Button
            type="submit"
            content="Se connecter"
            styles="my-btn-primary my-2"
          />
        </Form>

        <Link to="/password/forgot" className="link-primary">
          Mot de passe oublié ?
        </Link>
        <br />
        <Link
          to={{
            pathname: "/register",
            state: { redirectUrl: getRedirectUrl() },
          }}
          className="link-primary"
        >
          S&apos;inscrire
        </Link>
      </div>
    </div>
  );
};

export default Login;
