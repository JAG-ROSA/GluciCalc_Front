import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import MealsManager from "services/meals";

const AddProductToMeal = ({ data }) => {
  const [createMeal, setCreateMeal] = useState("");

  const handleMealCreate = (e) => {
    e.preventDefault();
    console.log(e.target.mealCreateForm.value);
    setCreateMeal(e.target.mealCreateForm.value);
  };

  useEffect(() => {
    MealsManager.getMeals(createMeal).then((response) => {
      console.log(response);
    });
  }, [createMeal]);

  return (
    <Card.Body>
      <Form onSubmit={handleMealCreate}>
        <Form.Group controlId="mealSelect">
          <Form.Label>Selectionner le repas</Form.Label>
          <Form.Control as="select">
            {data.map((element) => (
              <option key={element.id} value={element.id}>{element.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Créer le repas
        </Button>
      </Form>
    </Card.Body>
  );
};

export default AddProductToMeal;
