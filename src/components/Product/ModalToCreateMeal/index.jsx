import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

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
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Donne un nom à ton repas
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" onChange={getMealName} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => onHide(mealName)}>Créer</Button>
          <Button onClick={() => onHide("")}>Annuler</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalToCreateMeal;
