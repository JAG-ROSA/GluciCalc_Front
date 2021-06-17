import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { UserManager, UiManager } from "services";
import { resetErrors } from "store";
import store from "store/store";

const Login = () => {
  const history = useHistory();
  const isLoginSuccess = useSelector((loginstore) => loginstore.isLogged);
  const isLoginFailed = useSelector((loginstore) => !!loginstore.loginError);

  useEffect(() => {
    if (isLoginSuccess) {
      UiManager.openNotification("success", "Connexion réussie !");
      history.push("/dashboard");
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

          <Button type="submit" content="Se connecter" styles="my-btn-primary my-2" />
        </Form>

        <Link to="/password/forgot" className="link-primary">Mot de passe oublié ?</Link>
        <br />
        <Link to="/register" className="link-primary">S&apos;inscrire</Link>
      </div>
    </div>
  );
};

export default Login;
