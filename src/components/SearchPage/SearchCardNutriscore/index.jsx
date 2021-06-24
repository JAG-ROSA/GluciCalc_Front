import React, { useState, useEffect } from "react";

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
    <img src={`https://static.openfoodfacts.org/images/attributes/nutriscore-${nutriscore}.svg`} className="nutriscore-image pe-3" alt="Representation of the nutriscore value" />
  );
};

export default SearchCardNutriscore;
