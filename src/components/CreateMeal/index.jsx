import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import MealsManager from "services/meals";

const CreateMeal = () => {
  const [createMeal, setCreateMeal] = useState("");

  const handleMealCreate = (e) => {
    e.preventDefault();
    console.log(e.target.mealCreateForm.value);
    setCreateMeal(e.target.mealCreateForm.value);
  };

  useEffect(() => {
    MealsManager.createMeal(createMeal).then((data) => {
      console.log(data);
    });
  }, [createMeal]);

  return (
    <Card.Body>
      <Form onSubmit={handleMealCreate}>
        <Form.Group controlId="mealCreateForm">
          <Form.Label>Donne un nom à ton repas</Form.Label>
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
