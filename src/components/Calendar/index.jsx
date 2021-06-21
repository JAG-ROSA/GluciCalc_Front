import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import strftime from "strftime";

const Calendar = ({ data }) => {
  const [mealsEvent, setMealsEvent] = useState([]);

  const mealEvents = () => {
    setMealsEvent(data.map((element) => ({ title: `${element.name} - ${Math.round(element.totalCarbs)} g`, date: strftime("%F", new Date(element.date)) })));
  };

  useEffect(() => {
    mealEvents();
  }, [data]);

  const handleDateClick = () => {
    console.log("click");
  };

  return (
    <FullCalendar
      locale="fr"
      initialView="dayGridMonth"
      headerToolbar={{
        left: "",
        center: "title",
        right: "today,prevYear,prev,next,nextYear",
      }}
      buttonText={{
        today: "Aujourd'hui",
      }}
      plugins={[dayGridPlugin, interactionPlugin]}
      height={640}
      dateClick={handleDateClick}
      events={mealsEvent}
    />
  );
};

export default Calendar;
