import React from "react";
import {
  Accordion, Button, Row, Col,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { GiScales } from "react-icons/gi";
import MealItem from "components/Meals/MealItem";
import Button1 from "components/Button";

const MealSummary = ({
  meal: meals, onDeleteMeal, updateMeal, onDeleteQuantity,
}) => (
  <div className="MealSummary">
    <Row>
      <Col>
        <div className="nameMeal">
          <p>
            {meals.name.toUpperCase()}
          </p>
        </div>
      </Col>
      <Col>
        <div className="carbsMeal d-flex justify-content-end">
          <GiScales className="iconMeal" />
          <p>
            {Math.round(meals.totalCarbs)}
            {" "}
            g
          </p>
        </div>
      </Col>
      <Col>
        <Button1 type="button" content="Supprimer" styles="my-btn-secondary my-btn-sm" onAction={(event) => onDeleteMeal(event, meals.id)} />
      </Col>
    </Row>
    {meals.quantities.length !== 0 && (
    <Accordion>
      <div className="showDetailsMeal">
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          <BsSearch className="iconMeal" />
          détails
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <div>
            {meals.quantities.map((meal) => (
              <MealItem
                key={meal.id}
                meal={meal}
                onDelete={onDeleteQuantity}
                updateMeal={updateMeal}
              />
            )).sort((a, b) => (a.id > b.id ? 1 : -1))}
          </div>

        </Accordion.Collapse>
      </div>
    </Accordion>
    )}
  </div>
);

export default MealSummary;
