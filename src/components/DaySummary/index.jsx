import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/fr";
import MealSummary from "components/MealSummary";
import { Button } from "react-bootstrap";
import MealsManager from "services/meals";

const DaySummary = () => {
  const [date, setDate] = useState(moment());
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    MealsManager.getMealsForDay(date.format("YYYY-MM-DD")).then((data) => {
      console.log(data);
      setMeals(data);
    });
  }, [date]);

  const changeDay = (nbDay) => {
    const newDate = moment(date);
    newDate.add(nbDay, "day");
    setDate(newDate);
  };

  return (
    <div className="DaySummary">
      <Button variant="info" onClick={() => changeDay(-1)}>
        Prec
      </Button>
      <h1>{date.locale("fr").format("dddd Do MMMM")}</h1>
      <Button variant="info" onClick={() => changeDay(1)}>
        Suiv
      </Button>
      {meals.map((meal) => (
        <div key={meal.id}>
          <MealSummary meal={meal} />
        </div>
      ))}
    </div>
  );
};

export default DaySummary;
