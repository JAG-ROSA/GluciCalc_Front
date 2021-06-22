/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import strftime from "strftime";
import { useHistory } from "react-router-dom";

const Calendar = ({ mealsCalendar }) => {
  const [mealsEvent, setMealsEvent] = useState([]);
  const history = useHistory();

  const mealEvents = () => {
    setMealsEvent(mealsCalendar.map((element) => ({ title: `${element.name} - ${Math.round(element.totalCarbs)} g`, date: strftime("%F", new Date(element.date)) })));
  };

  useEffect(() => {
    mealEvents();
  }, [mealsCalendar]);

  const handleNavLinkDayClick = (date) => {
    history.push({ pathname: "/dashboard", calendarDate: strftime("%F", new Date(date.toISOString())) });
  };

  const handleEventClick = (date) => {
    history.push({ pathname: "/dashboard", calendarDate: strftime("%F", new Date(date.event._instance.range.start.toISOString())) });
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
      events={mealsEvent}
      navLinks
      navLinkDayClick={(date) => handleNavLinkDayClick(date)}
      eventClick={(date) => handleEventClick(date)}
    />
  );
};

export default Calendar;
