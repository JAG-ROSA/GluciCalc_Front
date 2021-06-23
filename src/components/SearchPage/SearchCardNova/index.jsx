import React, { useState, useEffect } from "react";

const SearchCardNova = ({ data }) => {
  const [nova, setNova] = useState("");

  const novaValue = (value) => {
    if (value.nova_group !== undefined) {
      setNova(value.nova_group);
    } else {
      setNova("unknown");
    }
  };

  useEffect(() => {
    novaValue(data);
  }, [data]);

  return (
    <img variant="bottom" src={`https://static.openfoodfacts.org/images/attributes/nova-group-${nova}.svg`} className="novagroup-image" alt="Representation of the nova group value" />
  );
};

export default SearchCardNova;
