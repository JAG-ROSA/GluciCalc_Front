import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from "components/Button";

const ProfileInput = ({ userDetails, onUpdate }) => {
  useEffect(() => { }, [userDetails]);

  return (
    <div>
      {(!!userDetails) && (
        <div className="d-flex justify-content-between align-items-baseline flex-wrap">
          <div className="col-sm-12 col-lg-6 pb-5">
            <p className="fs-5 title-semi-bold">{`Prénom : ${userDetails.user.first_name}`}</p>
            <p className="fs-5 title-semi-bold">{`Nom : ${userDetails.user.last_name}`}</p>
            <p className="fs-5 title-semi-bold">{`Email : ${userDetails.user.email}`}</p>
          </div>

          <Form onSubmit={onUpdate} className="col-sm-12 col-lg-6">
            <p className="fs-3 title-semi-bold">Modifier mes informations</p>
            <Form.Group controlId="formPlaintextFirstName" className="fs-6 pb-3">
              <Form.Label className="fs-6">Prénom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre prénom" defaultValue={userDetails.user.first_name} />
            </Form.Group>

            <Form.Group controlId="formPlaintextLastName" className="fs-6 pb-3">
              <Form.Label className="fs-6">Nom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre nom" defaultValue={userDetails.user.last_name} />
            </Form.Group>

            <Button styles="my-btn-primary my-2" type="submit" content="Modifier" />
          </Form>
        </div>
      )}
    </div>
  );
};

export default ProfileInput;
