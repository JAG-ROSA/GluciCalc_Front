import React from "react";
import Button from "components/Button";
import { Form, Col, Row } from "react-bootstrap";

const MealItemInput = ({ meal, onDelete, onSave }) => (
  <div className="detailsMeal">
    {meal.quantities.map((quantity) => {
      const food = quantity.product ?? quantity.recipe;
      return (
        <div key={quantity.id} className="products d-flex justify-content-between pb-2">
          <Form onSubmit={(event) => onSave(event, quantity.id)}>
            <Form.Group as={Row} controlId={`formQuantityInput${quantity.id}`}>
              <Col sm="10" className="d-flex align-items-baseline">
                {`${food.name} - `}
                <Form.Control size="sm" type="text" defaultValue={quantity.quantity} />
                g
              </Col>
            </Form.Group>
            <div>
              <Button type="submit" content="Valider" styles="my-btn-tertiary my-btn-sm me-2" />
              <Button type="button" content="Suprimer" styles="my-btn-tertiary my-btn-sm me-2" onAction={(event) => onDelete(event, quantity.id)} />
            </div>
          </Form>
        </div>
      );
    })}
  </div>
);

export default MealItemInput;
