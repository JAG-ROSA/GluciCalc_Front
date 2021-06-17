import React, { useState, useEffect } from "react";
import { Card, Form } from "react-bootstrap";

const CarbohydratesCalculus = ({ data }) => {
  const [glucidesQuantity, setGlucidesQuantity] = useState(data);

  const handleGlucidesQuantity = (e) => {
    const glucideCalculus = ((data * e.target.value) / 100).toFixed(2);
    setGlucidesQuantity(glucideCalculus);
  };

  useEffect(() => {

  }, [glucidesQuantity]);

  return (
    <Card.Body>
      <Card.Title>
        Calcul des glucides
      </Card.Title>
      <Card.Text>
        Glucides / 100g:
        &nbsp;
        {data}
      </Card.Text>
      <Card.Text>
        Ma portion en g:
        &nbsp;
        <Form.Group controlId="searchSugar">
          <Form.Control type="number" step="0.1" placeholder="Ma portion" className="text-center" onChange={(e) => handleGlucidesQuantity(e)} />
        </Form.Group>
      </Card.Text>
      <Card.Text>
        Total de glucides pour la portion:
        &nbsp;
        {glucidesQuantity}
        &nbsp;
        g
      </Card.Text>
    </Card.Body>
  );
};

export default CarbohydratesCalculus;
