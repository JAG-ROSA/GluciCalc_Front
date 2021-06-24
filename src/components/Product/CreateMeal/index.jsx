import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { UiManager, MealsManager } from "services";

const CreateMeal = ({ newMeal }) => {
  const handleMealCreate = async (e) => {
    e.preventDefault();
    try {
      await MealsManager.createMeal(e.target.mealCreateForm.value);
      newMeal(e.target.mealCreateForm.value);
      document.querySelector("#mealCreateForm").value = "";
      UiManager.openNotification(
        "success",
        "Repas créé 😉",
      );
    } catch (error) {
      UiManager.openNotification(
        "warning",
        "Donne un nom à ton repas 😉",
      );
    }
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
