import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SearchCard from "components/SearchCard";
import Nutriments from "components/Nutriments";
import CarbohydratesCalculus from "components/CarbohydratesCalculus";

const Product = () => {
  const { idProduct } = useParams();
  const [searchResult, setSearchResult] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${idProduct}.json`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setSearchResult(response.product);
        setIsFetched("true");
      });
  }, [idProduct]);

  console.log(searchResult);

  return (
    <div className="d-flex flex-wrap">
      <Row>
        <Col>
          <SearchCard data={searchResult} />
        </Col>
        <Col>
          {isFetched && <Nutriments data={searchResult.nutriments} />}
        </Col>
        <Col>
          <div className="py-2 mr-5">
            <Card style={{ width: "18rem" }}>
              {isFetched
              && <CarbohydratesCalculus data={searchResult.nutriments.carbohydrates_100g} />}
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
