import React from "react";
import { Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailed } from "store/user/userAction";
import { UiManager, UserManager } from "services";
import Button from "components/Button";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { token } = useParams();

  const loginFetch = (event, newData) => {
    event.preventDefault();
    const data = {
      email: newData.email,
      password: event.target.formBasicPassword.value,
    };
    UserManager.loginUser(data.email, data.password)
      .then(() => {
        dispatch(loginSuccess(data.id));
      })
      .catch((error) => {
        dispatch(loginFailed(error.message));
        UiManager.openNotification(
          "error",
          "Hum... il y a une petite erreur...",
        );
      });
  };

  const resetPasswordFetch = (event) => {
    event.preventDefault();
    const data = {
      password: event.target.formBasicPassword.value,
      token,
    };
    if (event.target.formBasicPassword.value === event.target.formBasicPassword2.value) {
      UserManager.resetPassword(data)
        .then(() => {
          loginFetch(event, data);
          dispatch(loginSuccess(data.id));
          UiManager.openNotification("success", "Mot de passe modifié, welcome back ! 🙂");
          history.push("/");
        })
        .catch((error) => {
          dispatch(loginFailed(error.message));
          UiManager.openNotification(
            "error",
            "Hum... il y a une petite erreur ! 🤔",
          );
        });
    } else {
      UiManager.openNotification("error", "Modification du mot de passe échouée, les mots de passes ne sont pas identiques !");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center slide-bottom">
      <div className="col-sm-10 col-md-8 col-lg-5 border-shadow p-5 mt-5">
        <h2 className="my-text-primary pb-5">Réinitialisation</h2>

        <Form onSubmit={resetPasswordFetch}>
          <Form.Group controlId="formBasicPassword" className="fs-6 pb-3">
            <Form.Label>Nouveau mot de passe</Form.Label>
            <Form.Control type="password" placeholder="Mot de passe" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword2" className="fs-6 pb-3">
            <Form.Label>Confirmer le nouveau mot de passe</Form.Label>
            <Form.Control type="password" placeholder="Confirmer le mot de passe" />
          </Form.Group>

          <Button type="submit" content="Confirmer" styles="my-btn-primary mt-4" />
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
