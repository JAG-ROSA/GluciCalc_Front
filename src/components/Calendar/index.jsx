import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import strftime from "strftime";

const Calendar = ({ data }) => {
  const [events, setEvents] = useState([]);
  console.log("mdsjf");
  console.log(data.map((element) => strftime("%F", new Date(element.date))));
  console.log(data);

  const mealEvents = () => {
    setEvents(data.map((element) => ({ title: `${element.name} - ${Math.round(element.totalCarbs)} g`, date: strftime("%F", new Date(element.date)) })));
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
      events={events}
    />
  );
};

export default Calendar;
