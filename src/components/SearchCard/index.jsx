/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React from "react";
import { Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchCardImage from "components/SearchCardImage";
import SearchCardNutriscore from "components/SearchCardNutriscore";
import SearchCardNova from "components/SearchCardNova";

const SearchCard = ({ data }) => (
  <div className="d-flex flex-wrap searchCard">
    <Row>
      {data.map((element) => (
        <div key={element._id} className="col-md-6 col-lg-4 py-2">
          <Link to={{ pathname: `product/${element._id}` }}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <SearchCardImage data={element} />
                <Card.Title>
                  {element.product_name_fr}
                </Card.Title>
                <Card.Text>
                  Marque:
                  &nbsp;
                  {element.brands}
                </Card.Text>
                <Card.Text>
                  Quantité:
                  &nbsp;
                  {element.quantity}
                </Card.Text>
                <SearchCardNutriscore data={element} />
                <SearchCardNova data={element} />
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))}
    </Row>
    {data.length === 0 && (
    <div className="w-100">
      <h4 className="text-center">Aucuns résultats. Essayez autre chose.</h4>
    </div>
    )}
  </div>
);

export default SearchCard;
