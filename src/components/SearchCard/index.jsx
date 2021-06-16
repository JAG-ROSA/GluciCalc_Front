/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React from "react";
import { Row, Card } from "react-bootstrap";
import SearchCardImage from "components/SearchCardImage";

const SearchCard = ({ data }) => (
  <div className="d-flex flex-wrap searchCard">
    <Row>
      {data.map((element) => (
        <div key={element._id} className="col-md-6 col-lg-4 py-2">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <SearchCardImage data={element} />
              <Card.Title>
                {element.product_name}
                &nbsp;
                -
                &nbsp;
                {element.brands}
                &nbsp;
                -
                &nbsp;
                {element.quantity}
              </Card.Title>
              {element.nutriscore_grade !== undefined && <Card.Img variant="bottom" src={`https://static.openfoodfacts.org/images/attributes/nutriscore-${element.nutriscore_grade}.svg`} className="nutriscoreImage" alt="Representation of the nutriscore value" />}
              {element.nova_group !== undefined && <Card.Img variant="bottom" src={`https://static.openfoodfacts.org/images/attributes/nova-group-${element.nova_group}.svg`} className="novagroupImage" alt="Representation of the nova group value" />}
              {element.nutriscore_grade === undefined && <Card.Img variant="bottom" src="https://static.openfoodfacts.org/images/attributes/nutriscore-unknown.svg" className="nutriscoreImage" alt="Representation of the nutriscore value" />}
              {element.nova_group === undefined && <Card.Img variant="bottom" src="https://static.openfoodfacts.org/images/attributes/nova-group-unknown.svg" className="novagroupImage" alt="Representation of the nova group value" />}
            </Card.Body>
          </Card>
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
