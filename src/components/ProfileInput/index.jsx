import React, { useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";

const ProfileInput = ({ userDetails, onUpdate }) => {
  useEffect(() => { }, [userDetails]);
  console.log(!!userDetails);
  return (
    (!!userDetails) && (
      <Form onSubmit={onUpdate}>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">Email</Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly size="sm" type="email" defaultValue={userDetails.user.email} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextFirstName">
          <Form.Label column sm="2">Prénom</Form.Label>
          <Col sm="10">
            <Form.Control size="sm" type="text" placeholder="Entrez votre prénom" defaultValue={userDetails.user.first_name} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextLastName">
          <Form.Label column sm="2">Nom</Form.Label>
          <Col sm="10" lg="10">
            <Form.Control size="sm" type="text" placeholder="Entrez votre nom" defaultValue={userDetails.user.last_name} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="2" />
          <Col sm="10" className="pt-2">
            <button className="btn-secondary btn-sm" type="submit">Mettre à jour le profil</button>
          </Col>
        </Form.Group>
      </Form>
    )
  );
};

export default ProfileInput;
