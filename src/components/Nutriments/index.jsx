/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable space-infix-ops */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { Row, Image } from "react-bootstrap";

const Nutriments = ({ data }) => {
  const [nutriQuantityFat, setNutriQuantityFat] = useState("");
  const [nutriQuantitySugar, setNutriQuantitySugar] = useState("");
  const [nutriQuantitySodium, setNutriQuantitySodium] = useState("");
  const [nutriQuantitySaturatedFat, setNutriQuantitySaturatedFat] = useState("");

  console.log(data);

  const nutriColor = (value, quantity1, quantity2, type) => {
    if (value < quantity1) {
      type("https://static.openfoodfacts.org/images/misc/low_30.png");
    } else if (value <= quantity2) {
      type("https://static.openfoodfacts.org/images/misc/moderate_30.png");
    } else {
      type("https://static.openfoodfacts.org/images/misc/high_30.png");
    }
  };

  useEffect(() => {
    nutriColor(data.fat_100g, 3, 20, setNutriQuantityFat);
    nutriColor(data.sugars, 5, 12.5, setNutriQuantitySugar);
    nutriColor(data.salt, 0.3, 1.5, setNutriQuantitySodium);
    nutriColor(data["saturated-fat_100g"], 1.5, 5, setNutriQuantitySaturatedFat);
  }, [data]);

  return (
    <div className="">
      <Row>
        <div className="py-2 mr-5">
          <p>{data.fat_100g}</p>
          <Image variant="top" src={nutriQuantityFat} className="nutriQuantityImage" alt="Nutriments quantity value" />
          <p>{data["saturated-fat_100g"]}</p>
          <Image variant="top" src={nutriQuantitySaturatedFat} className="nutriQuantityImage" alt="Nutriments quantity value" />
          <p>{data.sugars}</p>
          <Image variant="top" src={nutriQuantitySugar} className="nutriQuantityImage" alt="Nutriments quantity value" />
          <p>{data.salt}</p>
          <Image variant="top" src={nutriQuantitySodium} className="nutriQuantityImage" alt="Nutriments quantity value" />
        </div>
      </Row>
    </div>
  );
};

export default Nutriments;
