import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";

const CarbohydratesCalculus = ({ data, amountQuantity }) => {
  const [carbohydratesQuantity, setCarbohydratesQuantity] = useState(0);

  const handleCarbohydratesQuantity = (e) => {
    const carbohydratesCalculus = ((data * e.target.value) / 100).toFixed(2);
    setCarbohydratesQuantity(carbohydratesCalculus);
    amountQuantity(e.target.value);
  };

  return (
    <Card.Body>
      <Card.Title>
        Calcul des glucides
      </Card.Title>
      <Card.Text>
        Glucides / 100g:
        &nbsp;
        {data}
        &nbsp;
        g
      </Card.Text>
      <Card.Text>
        Ma portion en g:
        &nbsp;
        <Form.Group controlId="searchSugar">
          <Form.Control type="number" step="0.1" min="0" placeholder="Entrez votre portion en grammes" className="text-center" onChange={(e) => handleCarbohydratesQuantity(e)} />
        </Form.Group>
      </Card.Text>
      <Card.Text>
        Total de glucides pour la portion:
        &nbsp;
        {carbohydratesQuantity}
        &nbsp;
        g
      </Card.Text>
    </Card.Body>
  );
};

export default CarbohydratesCalculus;
