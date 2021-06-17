import React, { useState, useEffect } from "react";
import {
  Container, Row, Col, Card,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import SearchCard from "components/SearchCard";
import Nutriments from "components/Nutriments";
import CarbohydratesCalculus from "components/CarbohydratesCalculus";
import CreateMeal from "components/CreateMeal";
import AddProductToMeal from "components/AddProductToMeal";
import MealsManager from "services/meals";

const Product = () => {
  const { idProduct } = useParams();
  const [searchResult, setSearchResult] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [carbohydratesQuantity, setCarbohydratesQuantity] = useState(null);
  const [mealList, setMealList] = useState([]);

  console.log(carbohydratesQuantity);
  console.log(mealList);

  useEffect(() => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${idProduct}.json`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setSearchResult(response.product);
        setIsFetched("true");
      });
    MealsManager.getMeals().then((data) => {
      setMealList(data);
    });
  }, [idProduct]);

  // useEffect(() => {
  //   MealsManager.getMeals().then((data) => {
  //     console.log(data);
  //   });
  // }, [mealList]);

  const totalCarbohydrates = (value) => {
    setCarbohydratesQuantity(value);
  };

  const handleNewMeal = (value) => {
    console.log(value);
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
            <Card style={{ width: "18rem" }}>
              {isFetched
              && (
              <CarbohydratesCalculus
                data={searchResult.nutriments.carbohydrates_100g}
                totalCarbohydrates={totalCarbohydrates}
              />
              )}
              <CreateMeal newMeal={handleNewMeal} />
              <AddProductToMeal data={mealList} />
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
