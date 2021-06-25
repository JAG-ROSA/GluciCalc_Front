import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import moment from "moment";
import "moment/locale/fr";
import { useLocation } from "react-router-dom";
import MealSummary from "components/Meals/MealSummary";
import EmptyState from "assets/images/empty-state.jpg";
import { MealsManager } from "services";

const DaySummary = () => {
  const location = useLocation();
  const [date, setDate] = useState(moment(location.calendarDate));
  const [meals, setMeals] = useState([]);
  const [isInputHidden, setIsInputHidden] = useState(false);

  useEffect(() => {
    MealsManager.getMealsForDay(date.format("YYYY-MM-DD")).then((data) => {
      setMeals(data);
    });
  }, [date]);

  const changeDay = (nbDay) => {
    const newDate = moment(date);
    newDate.add(nbDay, "day");
    setDate(newDate);
  };

  const updateMeal = (mealIndex, quantityId, quantity) => {
    const newMeals = [...meals];
    const quantityIndex = newMeals[mealIndex].quantities.findIndex((q) => q.id === quantityId);
    if (quantityIndex >= 0) {
      newMeals[mealIndex].quantities[quantityIndex].quantity = quantity.quantity;
    }
    setMeals(newMeals);
  };

  const deleteProductInMeal = (mealIndex, quantityId) => {
    const newMeals = [...meals];
    const quantityIndex = newMeals[mealIndex].quantities.indexOf(quantityId);
    newMeals[mealIndex].quantities.splice(quantityIndex);
    setMeals(newMeals);
  };

  const deleteMeal = (mealIndex) => {
    const newMeals = [...meals];
    newMeals.splice(mealIndex, 1);
    setMeals(newMeals);
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
                  onDeleteMeal={() => deleteMeal(index)}
                  onDeleteQuantity={(quantityId) => deleteProductInMeal(index, quantityId)}
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
