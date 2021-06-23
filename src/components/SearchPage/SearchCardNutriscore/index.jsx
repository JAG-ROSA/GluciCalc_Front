/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const SearchCardNutriscore = ({ data }) => {
  const [nutriscore, setNutriscore] = useState("");

  const nutriscoreValue = (value) => {
    if (value.nutriscore_grade !== undefined) {
      setNutriscore(value.nutriscore_grade);
    } else {
      setNutriscore("unknown");
    }
  };

  useEffect(() => {
    nutriscoreValue(data);
  }, [data]);

  return (
    <Card.Img variant="bottom" src={`https://static.openfoodfacts.org/images/attributes/nutriscore-${nutriscore}.svg`} className="nutriscoreImage" alt="Representation of the nutriscore value" />
  );
};

export default SearchCardNutriscore;
