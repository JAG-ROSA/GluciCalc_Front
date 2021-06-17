import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import MealsManager from "services/meals";

const CreateMeal = ({ newMeal }) => {
  const [createMeal, setCreateMeal] = useState("");

  const handleMealCreate = (e) => {
    e.preventDefault();
    setCreateMeal(e.target.mealCreateForm.value);
  };

  useEffect(() => {
    MealsManager.createMeal(createMeal);
    newMeal(createMeal);
  }, [createMeal]);

  return (
    <Card.Body>
      <Card.Title>Donne un nom à ton repas</Card.Title>
      <Form onSubmit={handleMealCreate}>
        <Form.Group controlId="mealCreateForm">
          <Form.Control type="text" placeholder="Mon nouveau repas" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Créer le repas
        </Button>
      </Form>
    </Card.Body>
  );
};

export default CreateMeal;
