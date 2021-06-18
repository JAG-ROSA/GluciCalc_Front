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
    fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerme}&action=process&json=1&page_size=5`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSearchResult(data.products.map((element) => element));
      });
  };

  const handleSearch = (e) => {
    setSearchTerme(e.target.value);
    searchFetch();
  };

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
              <Link to={{ pathname: `product/${element._id}` }}>
                <ListGroup.Item>
                  {element.product_name_fr}
                </ListGroup.Item>
              </Link>
            ))}
            <Link to={{ pathname: "/search", data: searchTerme }}>
              <ListGroup.Item>
                Plus de résultats
              </ListGroup.Item>
            </Link>
          </ListGroup>
        </Col>
        )}
      </Form>
    </div>
  );
};

export default SearchBar;
