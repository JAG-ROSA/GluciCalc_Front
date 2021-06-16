import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { UserManager, UiManager } from "services";

const Login = () => {
  const isLoginSuccess = useSelector((store) => store.isLogged);
  const isLoginFailed = useSelector((store) => !!store.error);

  useEffect(() => {
    if (isLoginSuccess) {
      UiManager.openNotification("success", "Connexion réussie !");
    } else if (isLoginFailed) {
      UiManager.openNotification(
        "error",
        "Hum... il y a une petite erreur! 🤔",
      );
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
    <div className="d-flex justify-content-center pt-5 slide-left">
      <div className="col col-md-8 col-lg-5 border-shadow border-black p-5 my-5 mx-3">
        <h2 className="my-text-primary">Se connecter</h2>

        <Form onSubmit={loginFetch}>
          <Form.Group controlId="formBasicEmail" className="pb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              size="sm"
              type="email"
              placeholder="nom@example.com"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              size="sm"
              type="password"
              placeholder="Mot de passe"
            />
          </Form.Group>

          <button
            type="submit"
            className="my-btn-primary my-4"
          >
            <span>Se connecter</span>
          </button>
        </Form>

        <Link to="/password/forgot" className="link-tertiary">
          Mot de passe oublié ?
        </Link>
        <br />
        <Link to="/register" className="link-tertiary">
          S&apos;inscrire
        </Link>
      </div>
    </div>
  );
};

export default Login;
