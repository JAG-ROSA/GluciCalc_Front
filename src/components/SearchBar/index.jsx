/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import {
  Form, ListGroup, Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchTerme, setSearchTerme] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchList, setSearchList] = useState([]);

  const searchFetch = () => {
    fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerme}&search_simple=1&action=process&json=1&page_size=5`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setSearchResult(data.products.map((element) => element.product_name_fr)));
  };

  const handleSearch = (e) => {
    setSearchTerme(e.target.value);
  };

  useEffect(() => {
    searchFetch();
  }, [searchTerme]);

  useEffect(() => {
    setSearchList(searchResult);
  }, [searchResult]);

  return (
    <div>
      <Form>
        <Col md={{ span: 4, offset: 4 }}>
          <Form.Group controlId="searchTerme">
            <Form.Control type="text" placeholder="Je recherche..." className="text-center" onChange={(e) => handleSearch(e)} />
          </Form.Group>
        </Col>
        { searchTerme.length !== 0 && (
        <Col md={{ span: 4, offset: 4 }} className="searchList">
          <ListGroup>
            {searchList.map((element) => (
              <ListGroup.Item>
                {element}
              </ListGroup.Item>
            ))}
            <ListGroup.Item>
              <Link to="/search">Plus de résultats</Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        )}
      </Form>
    </div>
  );
};

export default SearchBar;
