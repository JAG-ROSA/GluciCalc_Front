import React from "react";
import {
  Accordion, Button, Row, Col,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { GiScales } from "react-icons/gi";

const MealSummary = ({ meal }) => (
  <div className="MealSummary">
    <Row>
      <Col>
        <div className="nameMeal">
          <p>
            {meal.name.toUpperCase()}
          </p>
        </div>
      </Col>
      <Col>
        <div className="carbsMeal d-flex justify-content-end">
          <GiScales className="iconMeal" />
          <p>
            {meal.totalCarbs}
            {" "}
            glucides
          </p>
        </div>
      </Col>
    </Row>
    <Accordion>
      <div className="showDetailsMeal">
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          <BsSearch className="iconMeal" />
          détails
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <div className="detailsMeal">
            {meal.quantities.map((quantity) => {
              const food = quantity.product ?? quantity.recipe;
              return (
                <div key={quantity.id} className="products">
                  {food.name}
                </div>
              );
            })}
          </div>
        </Accordion.Collapse>
      </div>
    </Accordion>
  </div>
);

export default MealSummary;
