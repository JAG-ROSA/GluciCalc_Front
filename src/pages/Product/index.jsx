import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
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
        <div className="ProductPage">
          <Row>
            <div className="col-lg-8 col-sm-12 pt-3">
              <div className="border-black bg-white p-3">
                <Row className="text-center">
                  <h1 className="mb-2 mx-2 my-text-primary">{(productResult.product_name_fr) ?? "Produit sans nom"}</h1>
                  <ProductInfoDisplay data={productResult} />
                </Row>
                <Row>
                  <div className="d-flex flex-column justify-content-center col-md-12 col-sm-12 col-lg-5">
                    <div className="product-img-container">
                      <ProductImage data={productResult} />
                    </div>
                  </div>
                  <div className="d-flex col-md-12 col-sm-12 col-lg-7 justify-content-center flex-column py-4">
                    <div className="align-self-center">
                      <h3 className="my-text-secondary">Repère nutritionnels pour 100g</h3>
                      <Nutriments data={productResult.nutriments} />
                    </div>
                    <div className="align-self-center">
                      <SearchCardNutriscore data={productResult} />
                      <SearchCardNova data={productResult} />
                    </div>
                  </div>
                </Row>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 pt-3">
              <div className="border-black bg-white p-3 h-100 d-flex flex-column justify-content-center">
                <h4 className="text-center">J&apos;ajoute cet aliment</h4>
                <div className="col-lg-12 col-sm-12">
                  <CarbohydratesCalculus
                    data={productResult.nutriments.carbohydrates_100g}
                    amountQuantity={handleAmountQuantity}
                  />
                </div>
                {auth ? (
                  <div className="col-lg-12 col-sm-12">
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
              </div>
            </div>
          </Row>
        </div>
      )}
    </div>
  );
};

export default Product;
