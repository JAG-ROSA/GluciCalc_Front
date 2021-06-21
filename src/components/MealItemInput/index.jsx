import React from "react";
import Button from "components/Button";
import { Form, Col, Row } from "react-bootstrap";

const MealItemInput = ({
  meal, onDelete, onSave, onCancel,
}) => {
  const food = meal.product ?? meal.recipe;
  return (
    <div className="detailsMeal">
      <div key={meal.quantity.id} className="products d-flex justify-content-between pb-2">
        <Form onSubmit={(event) => onSave(event, meal.id)}>
          <Form.Group as={Row} controlId={`formQuantityInput${meal.id}`}>
            <Col sm="10" className="d-flex align-items-baseline">
              {`${food.name}`}
              <Form.Control size="sm" type="text" defaultValue={meal.quantity} />
              g
            </Col>
          </Form.Group>
          <div>
            <Button type="submit" content="Valider" styles="my-btn-tertiary my-btn-sm me-2" />
            <Button type="button" content="Suprimer" styles="my-btn-tertiary my-btn-sm me-2" onAction={(event) => onDelete(event, meal.id)} />
            <Button type="button" content="Annuler" styles="my-btn-tertiary my-btn-sm me-2" onAction={onCancel} />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default MealItemInput;
