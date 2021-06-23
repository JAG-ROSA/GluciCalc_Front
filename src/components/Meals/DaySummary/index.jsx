import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import moment from "moment";
import "moment/locale/fr";
import { useLocation } from "react-router-dom";
import MealSummary from "components/Meals/MealSummary";
import MealsManager from "services/meals";
import EmptyState from "assets/images/empty-state.jpg";
import QuantitiesManager from "services/quantities";
import { UiManager } from "services";

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
      UiManager.openNotification("success", "Repas supprimé!");
    } catch (error) {
      console.log(error);
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

  const deleteMealQuantity = (event, id) => {
    event.preventDefault();
    QuantitiesManager.deleteProductQuantityInMeal(id).then(() => setDeletedMealQuantity(id));
  };
  return (
    <div className="DaySummary">
      <div className="headerDashboard">
        <div className="containerDashboard d-flex justify-content-between align-items-center">
          <div className="chevron">
            <FaChevronLeft onClick={() => changeDay(-1)} />
          </div>
          <div className="displayDate">
            <h2>{date.locale("fr").format("dddd Do MMMM")}</h2>
          </div>
          <div className="chevron">
            <FaChevronRight onClick={() => changeDay(+1)} />
          </div>
        </div>
      </div>
      <div className="containerDashboard">
        {meals.length !== 0 ? (
          meals.map((meal, index) => (
            <div key={meal.id}>
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
          <div className="emptyState">
            <img src={EmptyState} alt="empty-state-img" />
            <p>Recherche un aliment pour commencer ta journée...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DaySummary;
