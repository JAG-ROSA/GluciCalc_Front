import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import MealsManager from "services/meals";

const CreateMeal = ({ newMeal }) => {
  const handleMealCreate = (e) => {
    e.preventDefault();
    MealsManager.createMeal(e.target.mealCreateForm.value)
      .then(() => {
        newMeal(e.target.mealCreateForm.value);
        document.querySelector("#mealCreateForm").value = "";
      });
  };

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
