import React, { useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { UiManager, UserManager } from "services";

const Register = () => {
  const isRegisterSuccess = useSelector((store) => store.isLogged);
  const isRegisterFailed = useSelector((store) => !!store.error);

  useEffect(() => {
    if (isRegisterSuccess) {
      UiManager.openNotification("success", "Bienvenue 🙂");
    } else if (isRegisterFailed) {
      UiManager.openNotification(
        "error",
        "Hum... il y a une petite erreur! 🤔",
      );
    }
  }, [isRegisterSuccess, isRegisterFailed]);

  const fetchRegister = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.inputEmail.value,
      password: event.target.inputPassword.value,
    };
    if (
      event.target.inputPasswordConfirm.value
      === event.target.inputPassword.value
    ) {
      UserManager.registerUser(data.email, data.password);
    } else {
      UiManager.openNotification(
        "warning",
        "Les deux mots de passe ne sont pas identiques 😉",
      );
    }
  };

  return (
    <div className="Register">
      <Container>
        <h2 className="my-text-tertiary">S&apos;inscrire</h2>
        <Form onSubmit={fetchRegister}>
          <Form.Group controlId="inputEmail" className="pb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control size="sm" type="email" placeholder="Adresse e-mail" />
          </Form.Group>

          <Form.Group controlId="inputPassword" className="pb-3">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              size="sm"
              type="password"
              placeholder="Mot de passe"
            />
          </Form.Group>

          <Form.Group controlId="inputPasswordConfirm">
            <Form.Label>Confirmer le mot de passe</Form.Label>
            <Form.Control
              size="sm"
              type="password"
              placeholder="Confirmer le mot de passe"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="btn btn-secondary mt-4 mb-3"
          >
            S&apos;inscrire
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
