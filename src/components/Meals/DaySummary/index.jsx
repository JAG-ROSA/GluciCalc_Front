import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import moment from "moment";
import "moment/locale/fr";
import { useLocation } from "react-router-dom";
import MealSummary from "components/Meals/MealSummary";
import EmptyState from "assets/images/empty-state.jpg";
import { UiManager, QuantitiesManager, MealsManager } from "services";

const DaySummary = () => {
  const location = useLocation();
  const [date, setDate] = useState(moment(location.calendarDate));
  const [meals, setMeals] = useState([]);
  const [deletedMeal, setDeletedMeals] = useState("");
  const [deletedMealQuantity, setDeletedMealQuantity] = useState("");
  const [isInputHidden, setIsInputHidden] = useState(false);

  useEffect(() => {
    MealsManager.getMealsForDay(date.format("YYYY-MM-DD")).then((data) => {
      setMeals(data);
    });
  }, [deletedMeal, deletedMealQuantity, date]);

  const changeDay = (nbDay) => {
    const newDate = moment(date);
    newDate.add(nbDay, "day");
    setDate(newDate);
  };

  const deleteMeal = async (event, id) => {
    event.preventDefault();
    try {
      await MealsManager.destroyMeal(id);
      setDeletedMeals(id);
      UiManager.openNotification("success", "Repas supprimé ! 🚮");
    } catch (error) {
      UiManager.openNotification("error", "Le repas n'a pas pu être supprimé...");
    }
  };

  const updateMeal = (mealIndex, quantityId, quantity) => {
    const newMeals = [...meals];
    const quantityIndex = newMeals[mealIndex].quantities.findIndex((q) => q.id === quantityId);
    if (quantityIndex >= 0) {
      newMeals[mealIndex].quantities[quantityIndex].quantity = quantity.quantity;
    }
    setMeals(newMeals);
  };

  const deleteMealQuantity = async (event, id) => {
    event.preventDefault();
    try {
      await QuantitiesManager.deleteProductQuantityInMeal(id);
      setDeletedMealQuantity(id);
      UiManager.openNotification("success", "Produit supprimé ! 🚮");
    } catch (error) {
      UiManager.openNotification("error", "La quantité n'a pas pu être supprimée...");
    }
  };

  return (
    <div className="DaySummary">
      <div className="header-my-meals d-flex justify-content-between align-items-center">
        <div className="chevron ms-2">
          <FaChevronLeft onClick={() => changeDay(-1)} />
        </div>
        <div className="display-date text-center">
          <h2 className="m-0">{date.locale("fr").format("dddd Do MMMM")}</h2>
        </div>
        <div className="chevron me-2">
          <FaChevronRight onClick={() => changeDay(+1)} />
        </div>
      </div>

      <div className="container-my-meals">
        <div className="row d-flex justify-content-center">
          {meals.length !== 0 ? (
            meals.map((meal, index) => (
              <div key={meal.id} className="col-lg-8">
                <MealSummary
                  meal={meal}
                  onDeleteMeal={deleteMeal}
                  onDeleteQuantity={deleteMealQuantity}
                  isHidden={isInputHidden}
                  setIsHidden={setIsInputHidden}
                  updateMeal={(quantityId, quantity) => updateMeal(index, quantityId, quantity)}
                />
              </div>
            ))
          ) : (
            <div className="empty-state text-center">
              <img src={EmptyState} alt="empty-state-img" />
              <p>Recherche un aliment pour commencer ta journée...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DaySummary;
