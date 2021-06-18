/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import {
  Container, Row, Col, Card,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchCard from "components/SearchCard";
import Nutriments from "components/Nutriments";
import CarbohydratesCalculus from "components/CarbohydratesCalculus";
import CreateMeal from "components/CreateMeal";
import AddProductToMeal from "components/AddProductToMeal";

const Product = () => {
  const { idProduct } = useParams();
  const [amountConsumption, setAmountConsumption] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const auth = useSelector((store) => store.isLogged);

  useEffect(() => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${idProduct}.json`)
      .then((response) => response.json())
      .then((response) => {
        setSearchResult(response.product);
        setIsFetched("true");
      });
  }, [idProduct]);

  const handleAmountQuantity = (value) => {
    setAmountConsumption(value);
  };

  return (
    <Container className="d-flex flex-wrap">
      {isFetched && (
        <Row>
          <Col>
            <SearchCard data={searchResult} />
          </Col>
          <Col>
            <Nutriments data={searchResult.nutriments} />
          </Col>
          <Col>
            <Container className="py-2 mr-5">
              <Card style={{ width: "18rem" }}>
                <CarbohydratesCalculus
                  data={searchResult.nutriments.carbohydrates_100g}
                  amountQuantity={handleAmountQuantity}
                />
                {auth ? (
                  <div>
                    <CreateMeal />
                    <AddProductToMeal
                      data={{ amountConsumption, idProduct, searchResult }}
                    />
                  </div>
                )
                  : (
                    <Card.Text>
                      Vous devez vous connecter pour ajouter ce produit à votre repas
                    </Card.Text>
                  )}
              </Card>
            </Container>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Product;
