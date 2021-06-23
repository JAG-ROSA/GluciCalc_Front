/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

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
    <Card.Img variant="bottom" src={`https://static.openfoodfacts.org/images/attributes/nova-group-${nova}.svg`} className="novagroupImage" alt="Representation of the nova group value" />
  );
};

export default SearchCardNova;
