/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import {
  Form, Col, Button, Row,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import SearchCard from "components/SearchCard";

const Search = () => {
  const { data } = useLocation();
  const [searchTerme, setSearchTerme] = useState(data) || "";
  const [searchBrand, setSearchBrand] = useState("");
  const [searchSugar, setSearchSugar] = useState(500000);
  const [searchResult, setSearchResult] = useState([]);

  const searchFetch = () => {
    fetch(
      `https://fr.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${searchTerme}&tagtype_0=brands&tag_contains_0=contains&tag_0=${searchBrand}&nutriment_0=sugars&nutriment_compare_0=lte&nutriment_value_0=${searchSugar}&json=1`,
      {
        method: "GET",
      },
    )
      .then((response) => response.json())
      .then((response) => setSearchResult(response.products));
  };

  const handleSearchTerme = (e) => {
    setSearchTerme(e.target.value);
  };

  const handleSearchBrand = (e) => {
    setSearchBrand(e.target.value);
  };
  const handleSearchSugar = (e) => {
    setSearchSugar(e.target.value);
  };

  const handleSearchReset = () => {
    setSearchTerme("");
    setSearchBrand("");
    setSearchSugar(500000);
    document.querySelector("#searchBrand").value = "";
    document.querySelector("#searchSugar").value = "";
  };

  useEffect(() => {
    searchFetch();
  }, [searchTerme, searchBrand, searchSugar]);

  return (
    <div>
      <Form>
        <Col md={{ span: 4, offset: 4 }}>
          <Form.Group controlId="searchTerme">
            <Form.Control
              type="text"
              placeholder="Je recherche..."
              value={searchTerme}
              className="text-center"
              onChange={(e) => handleSearchTerme(e)}
            />
          </Form.Group>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <Form.Group controlId="searchBrand">
            <Form.Control
              type="text"
              placeholder="Marque"
              className="text-center"
              onChange={(e) => handleSearchBrand(e)}
            />
          </Form.Group>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <Form.Group controlId="searchSugar">
            <Form.Control
              type="number"
              step="0.1"
              placeholder="Sucres"
              className="text-center"
              onChange={(e) => handleSearchSugar(e)}
            />
          </Form.Group>
        </Col>
      </Form>
      <Button
        variant="primary"
        type="submit"
        className="btn btn-secondary mt-2 mb-3"
        onClick={handleSearchReset}
      >
        Remise à 0
      </Button>
      <Row className="container-card">
        <div className="d-flex flex-wrap justify-content-around">
          {searchResult.map((element) => (
            <Link to={{ pathname: `product/${element._id}` }}>
              <SearchCard data={element} />
            </Link>
          ))}
        </div>
      </Row>
      {searchResult.length === 0 && (
        <div className="w-100">
          <h4 className="text-center">
            Aucun résultats. Essayez autre chose.
          </h4>
        </div>
      )}
    </div>
  );
};

export default Search;
