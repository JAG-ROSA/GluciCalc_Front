/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import SearchCardImage from "components/SearchCardImage";
import SearchCardNutriscore from "components/SearchCardNutriscore";
import SearchCardNova from "components/SearchCardNova";

const SearchCard = ({ data }) => (
  <div key={data._id} className="searchCard">
    <Card style={{ width: "18rem" }}>
      <SearchCardImage data={data} />
      <Card.Body>
        <Card.Title>{data.product_name_fr}</Card.Title>
        <Row className="show-product-infos d-flex">
          <Col className="card-img-bottom my-2 d-flex flex-column">
            <SearchCardNutriscore data={data} />
            <SearchCardNova data={data} />
          </Col>
          <Col>
            <Card.Text>
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
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </div>
);

export default SearchCard;
