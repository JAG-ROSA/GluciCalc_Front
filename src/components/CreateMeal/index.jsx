import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { UiManager } from "services";
import MealsManager from "services/meals";

const CreateMeal = ({ newMeal }) => {
  const handleMealCreate = (e) => {
    e.preventDefault();
    MealsManager.createMeal(e.target.mealCreateForm.value)
      .then(() => {
        newMeal(e.target.mealCreateForm.value);
        document.querySelector("#mealCreateForm").value = "";
        UiManager.openNotification(
          "success",
          "Repas créé 😉",
        );
      })
      .catch(() => UiManager.openNotification(
        "error",
        "Hum... il y a une petite erreur ! 🤔",
      ));
  };

  return (
    <Card.Body>
      <Card.Title>Nom du Repas</Card.Title>
      <Form onSubmit={handleMealCreate}>
        <Form.Group controlId="mealCreateForm">
          <Form.Control type="text" placeholder="Nom du repas" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Créer le repas
        </Button>
      </Form>
    </Card.Body>
  );
};

export default CreateMeal;
