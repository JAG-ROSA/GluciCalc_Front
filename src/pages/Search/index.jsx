import React, { useEffect, useState } from "react";
import { Form, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import SearchCard from "components/SearchCard";

const Search = () => {
  const { data } = useLocation();
  const [searchTerme, setSearchTerme] = useState(data);
  const [searchResult, setSearchResult] = useState([]);

  const searchFetch = () => {
    fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerme}&search_simple=1&action=process&json=1`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => setSearchResult(response.products));
  };

  const handleSearch = (e) => {
    setSearchTerme(e.target.value);
  };

  useEffect(() => {
    searchFetch();
  }, [searchTerme]);

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  return (
    <div>
      <Form>
        <Col md={{ span: 4, offset: 4 }}>
          <Form.Group controlId="searchTerme">
            <Form.Control type="text" placeholder="Je recherche..." value={searchTerme} className="text-center" onChange={(e) => handleSearch(e)} />
          </Form.Group>
        </Col>
      </Form>
      <SearchCard data={searchResult} />
    </div>
  );
};

export default Search;
