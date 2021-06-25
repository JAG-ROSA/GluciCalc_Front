import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import Button from "components/Button";

const ModalToCreateMeal = ({ show, onHide }) => {
  const [mealName, setMealName] = useState("");
  const getMealName = (event) => {
    setMealName(event.target.value);
  };

  return (
    <div className="ModalToCreateMeal">
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="m-3">
          <h5>Donne un nom à ton repas</h5>
        </div>
        <div className="m-3">
          <Form.Control
            size="lg"
            type="text"
            placeholder="ex: Petit déjeuner"
            onChange={getMealName}
          />
        </div>
        <div className="mb-4 d-flex justify-content-center mx-3">
          <div className="mx-2">
            <Button
              content="Annuler"
              styles="my-btn-secondary"
              onAction={() => onHide("")}
            />
          </div>
          <div className="mx-2">
            <Button
              content="Créer"
              styles="my-btn-primary"
              onAction={() => onHide(mealName)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalToCreateMeal;
