/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import SearchCardImage from "components/SearchPage/SearchCardImage";
import SearchCardNutriscore from "components/SearchPage/SearchCardNutriscore";
import SearchCardNova from "components/SearchPage/SearchCardNova";

const SearchCard = ({ data }) => (
  <div key={data._id} className="searchCard">
    <Card style={{ width: "18rem" }} className="search-card">
      <SearchCardImage data={data} />
      <Card.Body className="search-card-body">
        <Card.Title className="search-card-title">{data.product_name_fr}</Card.Title>
        <Row className="show-product-infos d-flex">
          <Col className="card-img-bottom my-2 d-flex flex-column">
            <SearchCardNutriscore data={data} />
            <SearchCardNova data={data} />
          </Col>
          <Col>
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
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </div>
);

export default SearchCard;
