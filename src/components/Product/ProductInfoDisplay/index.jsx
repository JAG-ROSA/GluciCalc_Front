/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React from "react";

const ProductInfoDisplay = ({ data }) => (
  <div>
    <h2 className="mx-2 my-text-primary">{data.brands.toUpperCase()}</h2>
    <h3 className="mx-2 mb-5 my-text-quaternary">
      {data.nutriments !== undefined && data.nutriments.carbohydrates_100g}
      % de
      Glucides, dont Sucres :
      {" "}
      {data.nutriments !== undefined && data.nutriments.sugars}
      %
    </h3>
  </div>
);

export default ProductInfoDisplay;
