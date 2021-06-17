import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SearchCard from "components/SearchCard";

import Nutriments from "components/Nutriments";

const Product = () => {
  const { idProduct } = useParams();
  const [searchResult, setSearchResult] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  console.log(idProduct);

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
      </Row>
    </div>
  );
};

export default Product;
