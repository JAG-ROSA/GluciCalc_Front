import React, { useState, useEffect } from "react";

const SearchCardNova = ({ data }) => {
  const [nova, setNova] = useState("unknown");

  const novaValue = (value) => {
    if (value.nova_group !== undefined) {
      setNova(value.nova_group);
    }
  };

  useEffect(() => {
    novaValue(data);
  }, [data]);

  return (
    <img src={`https://static.openfoodfacts.org/images/attributes/nova-group-${nova}.svg`} className="novagroup-image" alt="Representation of the nova group value" />
  );
};

export default SearchCardNova;
