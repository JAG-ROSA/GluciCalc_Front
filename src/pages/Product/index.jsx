/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import {
  Col, Card, Row,
} from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Nutriments from "components/Nutriments";
import CarbohydratesCalculus from "components/CarbohydratesCalculus";
import AddProductToMeal from "components/AddProductToMeal";
import ProductImage from "components/Product/ProductImage";
import ProductInfoDisplay from "components/Product/ProductInfoDisplay";

const Product = () => {
  const { idProduct } = useParams();
  const [amountConsumption, setAmountConsumption] = useState(null);
  const [productResult, setProductResult] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const auth = useSelector((store) => store.isLogged);

  useEffect(() => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${idProduct}.json`)
      .then((response) => response.json())
      .then((response) => {
        setProductResult(response.product);
        setIsFetched("true");
      });
  }, [idProduct]);

  const handleAmountQuantity = (value) => {
    setAmountConsumption(value);
  };

  return (
    <div className="margin-container">
      {isFetched && (
        <Card className="border-shadow p-5 mt-5 mx-3">
          <Row className="mx-0">
            <Col xs sm="2" md="4" className="d-flex justify-content-center">
              <ProductImage data={productResult} />
            </Col>
            <Col xs sm="10" md="8">
              <h2 className="my-text-primary pb-3">{(productResult.product_name_fr) ?? "Produit sans nom"}</h2>
              <Row className="product-nutriscore">
                <Col>
                  <h3 className="my-text-primary pb-3">Composition produit</h3>
                  <ProductInfoDisplay data={productResult} />
                </Col>
                <Col>
                  <h3 className="my-text-primary pb-3">Repère nutritionnels pour 100g</h3>
                  <Nutriments data={productResult.nutriments} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="border-shadow p-5 mt-5">
            <Col>
              <CarbohydratesCalculus
                data={productResult.nutriments.carbohydrates_100g}
                amountQuantity={handleAmountQuantity}
              />
            </Col>
            {auth ? (
              <Col>
                <AddProductToMeal
                  data={{ amountConsumption, idProduct, productResult }}
                />
              </Col>
            )
              : (
                <div className="d-flex justify-content-center p-4">
                  <Link
                    to={{
                      pathname: "/login",
                      state: { redirectUrl: window.location.pathname },
                    }}
                    className="my-btn my-btn-primary px-4"
                  >
                    Ajouter au repas
                  </Link>
                </div>
              )}
          </Row>
        </Card>
      )}
    </div>
  );
};

export default Product;
