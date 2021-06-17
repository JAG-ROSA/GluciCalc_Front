import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import MealsManager from "services/meals";

const AddProductToMeal = ({ data }) => {
  const [createMeal, setCreateMeal] = useState("");

  const handleMealCreate = (e) => {
    e.preventDefault();
    setCreateMeal(e.target.mealCreateForm.value);
  };

  useEffect(() => {
    MealsManager.getMeals(createMeal).then((response) => {
      console.log(response);
    });
  }, [createMeal]);

  return (
    <Card.Body>
      <Card.Title>Selectionner le repas</Card.Title>
      <Form onSubmit={handleMealCreate}>
        {data.length > 0 ? (
          <Form.Group controlId="mealSelect">
            <Form.Control as="select">
              {data.map((element) => (
                <option key={element.id} value={element.id}>{element.name}</option>
              ))}
            </Form.Control>
            <Button variant="primary" type="submit">
              Ajouter au repas
            </Button>
          </Form.Group>
        )
          : (
            <Card.Text>
              Il n&apos;y a pas encore de repas disponible, merci d&apos;en créer un.
            </Card.Text>
          )}
      </Form>
    </Card.Body>
  );
};

export default AddProductToMeal;
