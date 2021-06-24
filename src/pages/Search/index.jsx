/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import SearchCard from "components/SearchPage/SearchCard";
import Button from "components/Button";
import { Link, useLocation } from "react-router-dom";

const Search = () => {
  const { data } = useLocation();
  const [searchTerme, setSearchTerme] = useState("");
  const [searchBrand, setSearchBrand] = useState("");
  const [searchSugar, setSearchSugar] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const setData = () => (typeof data === "undefined" ? setSearchTerme("") : setSearchTerme(data));
  useEffect(() => { setData(); }, [data]);

  const searchFetch = async () => {
    setIsLoading(true);
    let allProducts = [];
    let response;
    if (searchBrand.length === 0) {
      if (searchSugar !== 0) {
        response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${searchTerme}&nutriment_0=sugars&nutriment_compare_0=lte&nutriment_value_0=${searchSugar}&json=1&page_size=24`);
      } else {
        response = await fetch(
          `https://world.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${searchTerme}&json=1&page_size=24`,
        );
      }
    } else {
      response = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${searchTerme}&tagtype_0=brands&tag_contains_0=contains&tag_0=${searchBrand}&nutriment_0=sugars&nutriment_compare_0=lte&nutriment_value_0=${searchSugar}&json=1&page_size=24`,
      );
    }
    allProducts = (await response.json()).products;
    setSearchResult(allProducts);
    setIsLoading(false);
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
    setSearchSugar("");
  };

  useEffect(() => {
    searchFetch();
  }, [searchTerme, searchBrand, searchSugar]);

  return (
    <div className="margin-container">
      <Form>
        <div className="d-flex justify-content-center pb-4">
          <div className="row col-md-6 col-lg-5">
            <Form.Group controlId="searchTerme">
              <Form.Control
                type="text"
                placeholder="Je recherche..."
                value={searchTerme}
                className="text-center"
                onChange={(e) => handleSearchTerme(e)}
              />
            </Form.Group>

            <Form.Group controlId="searchBrand">
              <Form.Control
                type="text"
                placeholder="Marque"
                className="text-center"
                value={searchBrand}
                onChange={(e) => handleSearchBrand(e)}
              />
            </Form.Group>

            <Form.Group controlId="searchSugar">
              <Form.Control
                type="number"
                step="0.1"
                min="0"
                placeholder="Sucres"
                className="text-center"
                value={searchSugar}
                onChange={(e) => handleSearchSugar(e)}
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button type="submit" content="Remise à 0" styles="my-btn-primary my-btn-sm my-3" onClick={handleSearchReset} />
            </div>
          </div>
        </div>
      </Form>

      <div className="container-card">
        <div className="d-flex flex-wrap justify-content-around">
          {searchResult.map((element) => (
            <Link to={{ pathname: `product/${element._id}` }} key={element._id}>
              <SearchCard data={element} />
            </Link>
          ))}
        </div>
      </div>

      {isLoading && (
        <div className="loader d-flex justify-content-center">
          <Spinner animation="border" role="status" />
        </div>
      )}
      {!isLoading && searchResult.length === 0 && (
        <div className="w-100">
          <h4 className="text-center">Nous sommes désolés, aucun résultat n&apos;est disponible.</h4>
        </div>
      )}
    </div>
  );
};

export default Search;
