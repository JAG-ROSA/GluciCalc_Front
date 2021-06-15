/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import {
  Form, ListGroup, Row, Col,
} from "react-bootstrap";

const SearchBar = () => {
  const [searchTerme, setSearchTerme] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchList, setSearchList] = useState([]);

  const searchFetch = () => {
    console.log(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerme}&search_simple=1&action=process&json=1&page_size=5`);
    fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerme}&search_simple=1&action=process&json=1&page_size=5`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setSearchResult(data.products.map((element) => element.product_name_fr)));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerme(e.target.value);
  };
  useEffect(() => {
    console.log(searchTerme);
    searchFetch();
  }, [searchTerme]);

  console.log(searchResult);
  console.log(searchList);
  console.log(searchTerme);

  useEffect(() => {
    setSearchList(searchResult);
  }, [searchResult]);

  return (
    <div>
      <Form>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form.Group controlId="searchTerme">
              <Form.Control type="text" placeholder="Je recherche..." className="text-center" onChange={(e) => handleSearch(e)} />
            </Form.Group>
          </Col>
        </Row>
        { searchTerme.length !== 0 && (
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <ListGroup>
              {searchList.map((element) => (
                <ListGroup.Item>
                  {element}
                </ListGroup.Item>
              ))}
              <ListGroup.Item>
                Plus de résultats
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        )}
      </Form>
    </div>
  );
};

export default SearchBar;
