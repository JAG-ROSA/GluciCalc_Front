import React, { useState } from "react";
import { Form } from "react-bootstrap";

const CarbohydratesCalculus = ({ data, amountQuantity }) => {
  const [quantity, setQuantity] = useState("");
  const getCarbohydratesQuantity = (qty) => ((data * qty) / 100).toFixed(2);

  const handleCarbohydratesQuantity = (e) => {
    setQuantity(e.target.value);
    amountQuantity(e.target.value);
  };

  return (
    <div className="containerAdd my-3">
      <Form onSubmit={(event) => event.preventDefault()}>
        <Form.Group controlId="searchSugar">
          <h6>Je choisis ma portion (g, mL)</h6>
          <Form.Control
            className="form-control-secondary"
            type="number"
            step="1"
            min="0"
            placeholder="ex: 130"
            onChange={(e) => handleCarbohydratesQuantity(e)}
          />
        </Form.Group>
      </Form>
      <div className={`total-carbs${!quantity ? " hidden" : ""}`}>
        {getCarbohydratesQuantity(quantity)}
        g  de glucides
      </div>
    </div>
  );
};

export default CarbohydratesCalculus;
