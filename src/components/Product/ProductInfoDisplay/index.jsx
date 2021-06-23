/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React from "react";
import { Row } from "react-bootstrap";
import SearchCardNutriscore from "components/SearchPage/SearchCardNutriscore";
import SearchCardNova from "components/SearchPage/SearchCardNova";

const ProductInfoDisplay = ({ data }) => (
  <div key={data._id}>
    <Row className="show-product-infos d-flex">
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
      <h4 className="my-text-primary pb-3">Score du Produit</h4>
      <Row className="mx-0">
        <SearchCardNutriscore data={data} />
        <SearchCardNova data={data} />
      </Row>
    </Row>
  </div>
);

export default ProductInfoDisplay;
