import React from "react";
import { Accordion, Button } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { GiScales } from "react-icons/gi";
import MealItem from "components/Meals/MealItem";
import { MealsManager, UiManager } from "services";

const MealSummary = ({
  meal: meals, onDeleteMeal, updateMeal, onDeleteQuantity,
}) => {
  const deleteMeal = async (event, id) => {
    event.preventDefault();
    try {
      await MealsManager.destroyMeal(id);
      onDeleteMeal(id);
      UiManager.openNotification("success", "Repas supprimé ! 🚮");
    } catch (error) {
      UiManager.openNotification("error", "Le repas n'a pas pu être supprimé...");
    }
  };
  return (
    <div className="MealSummary">
      <div className="d-flex justify-content-between align-items-baseline">
        <h3 className="fs-5">{meals.name.toUpperCase()}</h3>
        <div className="icon-meal d-flex align-items-baseline ms-2">
          <GiScales />
          <p className="ps-2 pe-4">{`${Math.round(meals.totalCarbs)} g de glucides`}</p>
          <div className="my-icon">
            <FaRegTrashAlt onClick={(event) => deleteMeal(event, meals.id)} />
          </div>
        </div>
      </div>

      <div>
        {meals.quantities.length !== 0 && (
        <Accordion>
          <div className="show-details-meal">
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <div className="d-flex align-items-baseline">
                <BsSearch className="icon-meal me-2" />
                <p className="fs-5">Détails</p>
              </div>
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
    </div>
  );
};

export default MealSummary;
