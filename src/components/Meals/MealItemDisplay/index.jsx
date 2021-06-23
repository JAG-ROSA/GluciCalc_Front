import React from "react";
import Button from "components/Button";

const MealItemDisplay = ({ meal, onDelete, onShow }) => {
  const food = meal.product ?? meal.recipe;
  return (
    <div className="detailsMeal">
      <div key={meal.quantity.id} className="products d-flex justify-content-between pb-2">
        {`${food.name} - ${meal.quantity}g`}
        <div>
          <Button type="button" content="Modifier" styles="my-btn-tertiary my-btn-sm me-2" onAction={onShow} />
          <Button type="button" content="Suprimer" styles="my-btn-tertiary my-btn-sm me-2" onAction={(event) => onDelete(event, meal.id)} />
        </div>
      </div>
    </div>
  );
};

export default MealItemDisplay;
