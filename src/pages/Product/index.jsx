import React, { useState, useEffect } from "react";
import { Row, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SearchCardImage from "components/SearchCardImage";
import SearchCardNutriscore from "components/SearchCardNutriscore";
import SearchCardNova from "components/SearchCardNova";
import Nutriments from "components/Nutriments";

const Product = () => {
  const { idProduct } = useParams();
  const [searchResult, setSearchResult] = useState([]);

  console.log(idProduct);

  useEffect(() => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${idProduct}.json`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => setSearchResult(response.product));
  }, [idProduct]);

  console.log(searchResult);

  return (
    <div className="d-flex flex-wrap searchCard">
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <SearchCardImage data={searchResult} />
            <Card.Title>
              {searchResult.product_name_fr}
            </Card.Title>
            <Card.Text>
              Marque:
              &nbsp;
              {searchResult.brands}
            </Card.Text>
            <Card.Text>
              Quantité:
              &nbsp;
              {searchResult.quantity}
            </Card.Text>
            <SearchCardNutriscore data={searchResult} />
            <SearchCardNova data={searchResult} />
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Nutriments data={searchResult.nutriments} />
      </Row>
    </div>
  );
};

export default Product;
