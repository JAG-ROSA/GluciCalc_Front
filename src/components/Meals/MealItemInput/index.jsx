import React from "react";
import { Form, Row } from "react-bootstrap";

const MealItemInput = ({
  meal, onDelete, onSave, onCancel,
}) => {
  const food = meal.product ?? meal.recipe;

  return (
    <div key={meal.quantity.id} className="pb-2">
      <Form onSubmit={(event) => onSave(event, meal.id)}>
        <div className="d-flex justify-content-between align-items-baseline flex-wrap">
          <Form.Group as={Row} controlId={`formQuantityInput${meal.id}`}>
            <div sm="10" className="d-flex align-items-baseline">
              {`${food.name} -`}
              <Form.Control size="sm" type="text" className="w-25" defaultValue={meal.quantity} />
              g consommés
            </div>
          </Form.Group>
          <div className="d-flex py-2">
            <button type="submit" className="me-4">Valider</button>
            <button type="submit" className="me-4" onClick={(event) => onDelete(event, meal.id)}>Suprimer</button>
            <button type="submit" onClick={onCancel}>Annuler</button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default MealItemInput;
