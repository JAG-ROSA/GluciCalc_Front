// import React, { useState } from "react";
import React from "react";
import {
  Accordion, Button, Row, Col,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { GiScales } from "react-icons/gi";
import MealItem from "components/MealItem";
import MealItemInput from "components/MealItemInput";
import Button1 from "components/Button";
import QuantitiesManager from "services/quantities";

const MealSummary = ({
  meal, onDeleteMeal, setIsHidden, isHidden, updateMeal, onDeleteQuantity,
}) => {
  const toggleInput = () => {
    setIsHidden(!isHidden);
  };

  const updateMealQuantity = async (event, id) => {
    event.preventDefault();
    const quantityData = {
      quantity: document.querySelector(`#formQuantityInput${id}`).value,
    };
    const response = await QuantitiesManager.updateProductQuantityInMeal(id, quantityData);
    updateMeal(id, response);
    setIsHidden(!isHidden);
  };

  return (
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
              {Math.round(meal.totalCarbs)}
              {" "}
              g
            </p>
          </div>
        </Col>
        <Col>
          <Button1 type="button" content="Supprimer" styles="my-btn-secondary my-btn-sm" onAction={(event) => onDeleteMeal(event, meal.id)} />
        </Col>
      </Row>
      <Accordion>
        <div className="showDetailsMeal">
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <BsSearch className="iconMeal" />
            détails
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <>
              {isHidden && (
                <MealItemInput
                  meal={meal}
                  onDelete={onDeleteQuantity}
                  onSave={updateMealQuantity}
                />
              )}
              {!isHidden && (
                <MealItem meal={meal} onDelete={onDeleteQuantity} onShow={toggleInput} />
              )}
            </>
          </Accordion.Collapse>
        </div>
      </Accordion>
    </div>
  );
};
export default MealSummary;
