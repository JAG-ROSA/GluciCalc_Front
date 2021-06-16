import React, { useEffect, useState } from "react";
import {
  Form, Col,
} from "react-bootstrap";
import SearchCard from "components/SearchCard";

const Search = () => {
  const [searchTerme, setSearchTerme] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // const [searchList, setSearchList] = useState([]);

  const searchFetch = () => {
    fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerme}&search_simple=1&action=process&json=1`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setSearchResult(data.products));
  };

  const handleSearch = (e) => {
    setSearchTerme(e.target.value);
  };

  useEffect(() => {
    searchFetch();
  }, [searchTerme]);

  useEffect(() => {
    console.log(searchResult);
    // setSearchList(searchResult);
  }, [searchResult]);

  return (
    <div>
      <Form>
        <Col md={{ span: 4, offset: 4 }}>
          <Form.Group controlId="searchTerme">
            <Form.Control type="text" placeholder="Je recherche..." className="text-center" onChange={(e) => handleSearch(e)} />
          </Form.Group>
        </Col>
      </Form>
      {searchResult.length > 0 && <SearchCard data={searchResult} />}
    </div>
  );
};

export default Search;
