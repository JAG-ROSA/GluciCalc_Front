import React from "react";
import { Accordion } from "react-bootstrap";

const MealSummary = ({ meal }) => {
  console.log("ok");
  return (
    <div className="MealSummary">
      <div className="nameMeal">
        <strong>
          {meal.name}
          {meal.totalCarbs}
        </strong>
      </div>
      <Accordion>
        <div className="showDetailsMeal">
          <Accordion.Toggle variant="link" eventKey="0">
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
};

export default MealSummary;
