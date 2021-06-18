/* eslint-disable no-underscore-dangle */
import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import MealsManager from "services/meals";

const AddProductToMeal = ({ data, carbohydrates }) => {
  const { amount, idProduct, mealList } = data;
  const history = useHistory();

  const handleAddProduct = (e) => {
    e.preventDefault();
    MealsManager.addProductToMeal(
      amount, carbohydrates, e.target.mealSelect.value, idProduct,
    ).then(() => {
      history.push("/dashboard");
    });
  };

  return (
    <Card.Body>
      <Card.Title>
        Selectionner le repas
      </Card.Title>
      <Form onSubmit={handleAddProduct}>
        {mealList.length > 0 ? (
          <Form.Group controlId="mealSelect">
            <Form.Control as="select">
              {mealList.map((element) => (
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
