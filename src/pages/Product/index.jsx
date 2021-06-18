/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import {
  Container, Row, Col, Card,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/fr";
import SearchCard from "components/SearchCard";
import Nutriments from "components/Nutriments";
import CarbohydratesCalculus from "components/CarbohydratesCalculus";
import CreateMeal from "components/CreateMeal";
import AddProductToMeal from "components/AddProductToMeal";
import MealsManager from "services/meals";

const Product = () => {
  const { idProduct } = useParams();
  const [amount, setAmount] = useState(null);
  const [mealList, setMealList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const date = moment();

  useEffect(() => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${idProduct}.json`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setSearchResult(response.product);
        setIsFetched("true");
      });
    MealsManager.getMealsForDay(date.format("YYYY-MM-DD")).then((response) => {
      setMealList(response);
    });
  }, [idProduct]);

  const handleAmountQuantity = (value) => {
    setAmount(value);
  };

  const handleNewMeal = (value) => {
    setMealList(value);
  };

  return (
    <Container className="d-flex flex-wrap">
      <Row>
        <Col>
          <SearchCard data={searchResult} />
        </Col>
        <Col>
          {isFetched && <Nutriments data={searchResult.nutriments} />}
        </Col>
        <Col>
          <Container className="py-2 mr-5">
            {isFetched && (
            <Card style={{ width: "18rem" }}>
              <CarbohydratesCalculus
                data={searchResult.nutriments.carbohydrates_100g}
                amountQuantity={handleAmountQuantity}
              />
              <CreateMeal newMeal={handleNewMeal} />
              <AddProductToMeal
                data={{ amount, idProduct, mealList }}
                carbohydrates={searchResult.nutriments.carbohydrates_100g}
              />
            </Card>
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
