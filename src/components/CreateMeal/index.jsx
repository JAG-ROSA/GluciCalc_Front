import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const CreateMeal = () => {
  const handleMealCreate = (e) => {
    console.log(e.target.value);
  };

  return (
    <Card.Body>
      <Form onSubmit={handleMealCreate}>
        <Form.Group controlId="mealCreateForm">
          <Form.Label>Email address</Form.Label>
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
