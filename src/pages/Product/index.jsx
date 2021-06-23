import React, { useState, useEffect } from "react";
import {
  Row,
} from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Nutriments from "components/Product/Nutriments";
import CarbohydratesCalculus from "components/Product/CarbohydratesCalculus";
import AddProductToMeal from "components/Product/AddProductToMeal";
import ProductImage from "components/Product/ProductImage";
import ProductInfoDisplay from "components/Product/ProductInfoDisplay";
import SearchCardNutriscore from "components/SearchPage/SearchCardNutriscore";
import SearchCardNova from "components/SearchPage/SearchCardNova";

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
        <div className="border-black bg-white p-5 mt-5">
          <Row>
            <div className="d-flex justify-content-center col-md-12 col-sm-12 col-lg-5">
              <ProductImage data={productResult} />
            </div>

            <div className="col-md-12 col-sm-12 col-lg-7">
              <h2 className="my-text-primary text-center">{(productResult.product_name_fr) ?? "Produit sans nom"}</h2>
              <div className="d-flex flex-wrap">
                <div className="col-lg-6 col-sm-12">
                  <h3 className="my-text-primary">Composition produit</h3>
                  <ProductInfoDisplay data={productResult} />
                </div>
                <div className="col-lg-6 col-sm-12">
                  <h3 className="my-text-primary">Repère nutritionnels pour 100g</h3>
                  <Nutriments data={productResult.nutriments} />
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h3 className="my-text-primary">Score du Produit</h3>
                <div className="mx-0 d-flex align-items-center">
                  <SearchCardNutriscore data={productResult} />
                  <SearchCardNova data={productResult} />
                </div>
              </div>
            </div>

          </Row>
          <Row>
            <div className="col-lg-6 col-sm-12">
              <CarbohydratesCalculus
                data={productResult.nutriments.carbohydrates_100g}
                amountQuantity={handleAmountQuantity}
              />
            </div>
            {auth ? (
              <div className="col-lg-6 col-sm-12">
                <AddProductToMeal
                  data={{ amountConsumption, idProduct, productResult }}
                />
              </div>
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
        </div>
      )}
    </div>
  );
};

export default Product;
