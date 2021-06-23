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

  const searchFetch = (value) => {
    fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${value}&action=process&json=1&page_size=5`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data.products.map((element) => element));
      });
  };

  const handleSearch = (e) => {
    setSearchTerme(e.target.value);
    searchFetch(e.target.value);
  };

  useEffect(() => {
    setSearchList(searchResult);
  }, [searchResult]);

  return (
    <Form className="searchForm">
      <Col>
        <Form.Group controlId="searchTerme">
          <Form.Control type="text" placeholder="Je recherche..." className="text-center" onChange={(e) => handleSearch(e)} />
        </Form.Group>
      </Col>
      { searchTerme.length !== 0 && (
      <Col className="search-list">
        <ListGroup>
          {searchList.map((element) => (
            typeof element.product_name_fr !== "undefined" ? (
              <Link to={{ pathname: `/product/${element._id}` }} key={element._id} onClick={() => setSearchTerme("")}>
                <ListGroup.Item key={element._id}>
                  {element.product_name_fr}
                </ListGroup.Item>
              </Link>
            )
              : null
          ))}
          <Link to={{ pathname: "/search", data: searchTerme }} onClick={() => setSearchTerme("")}>
            <ListGroup.Item key="no found">
              Plus de résultats
            </ListGroup.Item>
          </Link>
        </ListGroup>
      </Col>
      )}
    </Form>
  );
};

export default SearchBar;
