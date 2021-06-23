import React, { useState } from "react";
import MealItemInput from "components/Meals/MealItemInput";
import MealItemDisplay from "components/Meals/MealItemDisplay";
import QuantitiesManager from "services/quantities";

const MealItem = ({
  meal, onDelete, updateMeal,
}) => {
  const [editMode, setEditMode] = useState(false);

  const handleShow = () => {
    setEditMode(true);
  };
  const handleCancel = () => {
    setEditMode(false);
  };

  const updateMealQuantity = async (event, id) => {
    event.preventDefault();
    const quantityData = {
      quantity: document.querySelector(`#formQuantityInput${id}`).value,
    };
    const response = await QuantitiesManager.updateProductQuantityInMeal(id, quantityData);
    updateMeal(id, response);
    setEditMode(false);
  };

  if (editMode) {
    return (
      <MealItemInput
        meal={meal}
        onDelete={onDelete}
        onSave={updateMealQuantity}
        onCancel={handleCancel}
      />
    );
  }
  return (<MealItemDisplay meal={meal} onDelete={onDelete} onShow={handleShow} />);
};

export default MealItem;
