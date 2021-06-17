import React, { useState, useEffect } from "react";
import { Row, Image, Card } from "react-bootstrap";

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
    <div>
      <Row>
        <div className="py-2 mr-5">
          <Card>
            <Card.Body>
              <Image variant="top" src={nutriQuantityFat} className="nutriQuantityImage" alt="Nutriments quantity value" />
              &nbsp;
              {data.fat_100g}
              &nbsp;
              g de Matières grasses / Lipides
            </Card.Body>
            <Card.Body>
              <Image variant="top" src={nutriQuantitySaturatedFat} className="nutriQuantityImage" alt="Nutriments quantity value" />
              &nbsp;
              {data["saturated-fat_100g"]}
              &nbsp;
              g d&apos;Acides gras saturés
            </Card.Body>
            <Card.Body>
              <Image variant="top" src={nutriQuantitySugar} className="nutriQuantityImage" alt="Nutriments quantity value" />
              &nbsp;
              {data.sugars}
              &nbsp;
              g de Sucres
            </Card.Body>
            <Card.Body>
              <Image variant="top" src={nutriQuantitySodium} className="nutriQuantityImage" alt="Nutriments quantity value" />
              &nbsp;
              {data.salt}
              &nbsp;
              g de Sel
            </Card.Body>
          </Card>
        </div>
      </Row>
    </div>
  );
};

export default Nutriments;
