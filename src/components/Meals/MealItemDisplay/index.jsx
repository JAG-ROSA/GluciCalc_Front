import React from "react";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MealItemDisplay = ({ meal, onDelete, onShow }) => {
  const food = meal.product ?? meal.recipe;

  return (
    <div key={meal.quantity.id} className="products d-flex justify-content-between align-items-baseline pb-2">
      <Link to={{ pathname: `product/${food.api_product_id}` }} key={food.id} className="link-primary">
        {`${food.name} - ${meal.quantity} g consommés`}
      </Link>
      <div className="d-flex align-items-baseline">
        <FaPencilAlt className="my-icon my-icon-secondary me-2" onClick={onShow} />
        <FaTrashAlt className="my-icon" onClick={(event) => onDelete(event, meal.id)} />
      </div>
    </div>
  );
};

export default MealItemDisplay;
