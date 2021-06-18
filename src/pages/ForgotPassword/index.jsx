import React from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { UiManager, UserManager } from "services";
import Button from "components/Button";

const ForgotPassword = () => {
  const history = useHistory();

  const forgotPasswordFetch = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.formBasicEmail.value,
    };
    UserManager.forgotPassword(data)
      .then(() => {
        UiManager.openNotification("success", "Email de récupération du mot de passe envoyé !");
        history.push("/");
      })
      .catch(() => {
        UiManager.openNotification(
          "error",
          "Hum... il y a une petite erreur ! 🤔",
        );
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center slide-top">
      <div className="col-sm-10 col-md-8 col-lg-5 border-shadow p-5 mt-5">
        <h2 className="my-text-primary pb-3">Mot de passe oublié</h2>

        <Form onSubmit={forgotPasswordFetch} className="fs-6 pb-3">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="nom@example.com" />
          </Form.Group>

          <Button type="submit" content="Réinitialiser" styles="my-btn-primary mt-4" />
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
