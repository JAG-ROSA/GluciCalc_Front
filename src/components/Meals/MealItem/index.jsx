import React, { useState } from "react";
import MealItemInput from "components/Meals/MealItemInput";
import MealItemDisplay from "components/Meals/MealItemDisplay";
import { UiManager, QuantitiesManager } from "services";

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
    try {
      const response = await QuantitiesManager.updateProductQuantityInMeal(id, quantityData);
      updateMeal(id, response);
      setEditMode(false);
      UiManager.openNotification("success", "Quantité modifiée! ⚖️");
    } catch (error) {
      UiManager.openNotification("error", "La quantité n'a pas pu être modifiée...");
    }
  };

  const deleteMealQuantity = async (event, id) => {
    event.preventDefault();
    try {
      await QuantitiesManager.deleteProductQuantityInMeal(id);
      onDelete(id);
      UiManager.openNotification("success", "Produit supprimé ! 🚮");
    } catch (error) {
      UiManager.openNotification("error", "La quantité n'a pas pu être supprimée...");
    }
  };

  if (editMode) {
    return (
      <MealItemInput
        meal={meal}
        onDelete={deleteMealQuantity}
        onSave={updateMealQuantity}
        onCancel={handleCancel}
      />
    );
  }
  return (<MealItemDisplay meal={meal} onDelete={deleteMealQuantity} onShow={handleShow} />);
};

export default MealItem;
