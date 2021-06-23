/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React from "react";
import { Row } from "react-bootstrap";

const ProductInfoDisplay = ({ data }) => (
  <div key={data._id}>
    <Row className="show-product-infos">
      <p>
        <span>Marque :</span>
        {" "}
        {data.brands}
      </p>
      <p>
        <span>Quantité :</span>
        {" "}
        {data.quantity}
      </p>
      {data.nutriments !== undefined && (
        <p>
          <span>Glucides (%) :</span>
          {" "}
          {data.nutriments.carbohydrates_100g}
          &nbsp; g
        </p>
      )}
      {data.nutriments !== undefined && (
        <p>
          <span>Dont sucres :</span>
          {" "}
          {data.nutriments.sugars}
          &nbsp; g
        </p>
      )}
    </Row>
  </div>
);

export default ProductInfoDisplay;
