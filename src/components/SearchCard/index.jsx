/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React from "react";
import { Card } from "react-bootstrap";
import SearchCardImage from "components/SearchCardImage";
import SearchCardNutriscore from "components/SearchCardNutriscore";
import SearchCardNova from "components/SearchCardNova";

const SearchCard = ({ data }) => (
  <div key={data._id} className="col-md-6 col-lg-4 py-2 searchCard">
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <SearchCardImage data={data} />
        <Card.Title>
          {data.product_name_fr}
        </Card.Title>
        <Card.Text>
          Marque:
          &nbsp;
          {data.brands}
        </Card.Text>
        <Card.Text>
          Quantité:
          &nbsp;
          {data.quantity}
        </Card.Text>
        {data.nutriments !== undefined && (
        <Card.Text>
          Glucides / 100g:
          &nbsp;
          {data.nutriments.carbohydrates_100g}
          &nbsp;
          g
        </Card.Text>
        )}
        {data.nutriments !== undefined && (
        <Card.Text>
          Dont sucres:
          &nbsp;
          {data.nutriments.sugars}
          &nbsp;
          g
        </Card.Text>
        )}
        <SearchCardNutriscore data={data} />
        <SearchCardNova data={data} />
      </Card.Body>
    </Card>
  </div>
);

export default SearchCard;
