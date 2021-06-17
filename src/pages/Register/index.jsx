import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { UiManager, UserManager } from "services";
import Button from "components/Button";

const Register = () => {
  const isRegisterSuccess = useSelector((store) => store.isLogged);
  const isRegisterFailed = useSelector((store) => !!store.error);
  const history = useHistory();

  useEffect(() => {
    if (isRegisterSuccess) {
      UiManager.openNotification("success", "Bienvenue 🙂");
      history.push("/dashbord");
    } else if (isRegisterFailed) {
      UiManager.openNotification(
        "error",
        "Hum... il y a une petite erreur ! 🤔",
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
    <div className="d-flex justify-content-center slide-right">
      <div className="col-sm-10 col-md-8 col-lg-5 border-shadow p-5 my-5 mx-3">
        <h2 className="my-text-primary">S&apos;inscrire</h2>

        <Form onSubmit={fetchRegister}>
          <Form.Group controlId="inputEmail" className="fs-6 pb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Adresse e-mail" />
          </Form.Group>

          <Form.Group controlId="inputPassword" className="fs-6 pb-3">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" placeholder="Mot de passe" />
          </Form.Group>

          <Form.Group controlId="inputPasswordConfirm" className="fs-6 pb-3">
            <Form.Label>Confirmer le mot de passe</Form.Label>
            <Form.Control type="password" placeholder="Confirmer le mot de passe" />
          </Form.Group>

          <Button type="submit" content="Se connecter" styles="my-btn-primary my-2" />
        </Form>
      </div>
    </div>
  );
};

export default Register;
