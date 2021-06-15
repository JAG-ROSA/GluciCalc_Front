import React from "react";
import { useDispatch } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import {
  registrationRequest,
  registrationSuccess,
} from "store/user/userAction";

const Register = () => {
  const dispatch = useDispatch();
  const fetchRegister = (event) => {
    event.preventDefault();
    dispatch(registrationRequest());
    const data = {
      user: {
        email: event.target.inputEmail.value,
        password: event.target.inputPassword.value,
      },
    };
    fetch("http://localhost:3001/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(
          registrationSuccess({
            id: response.id,
            firstName: response.first_name,
          }),
        );
      })
      .catch((error) => {
        console.log(error);
      });
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
