import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import moment from "moment";
import "moment/locale/fr";
import MealSummary from "components/MealSummary";
import MealsManager from "services/meals";
import EmptyState from "assets/images/empty-state.jpg";

const DaySummary = () => {
  const [date, setDate] = useState(moment());
  const [meals, setMeals] = useState([]);
  const [deletedMeal, setDeletedMeals] = useState("");

  const deleteMeal = (event, id) => {
    event.preventDefault();
    MealsManager.destroyMeal(id).then(() => setDeletedMeals(id));
  };

  useEffect(() => {
    MealsManager.getMealsForDay(date.format("YYYY-MM-DD")).then((data) => {
      setMeals(data);
    });
  }, [deletedMeal, date]);

  const changeDay = (nbDay) => {
    const newDate = moment(date);
    newDate.add(nbDay, "day");
    setDate(newDate);
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
          meals.map((meal) => (
            <div key={meal.id}>
              <MealSummary meal={meal} onDelete={deleteMeal} />
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
