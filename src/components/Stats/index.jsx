import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import moment from "moment";
import "moment/locale/fr";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import strftime from "strftime";

const Stats = ({ mealsStats }) => {
  const [date, setDate] = useState(moment());
  const [mealsPerMonth, setMealsPerMonth] = useState(mealsStats.filter((element) => strftime("%Y-%m", new Date(element.date)) === date.format("YYYY-MM")));
  const [totalCarbsPerDay, setTotalCarbsPerDay] = useState();

  useEffect(() => {
    const filteredMealsPerMonth = mealsStats.filter((element) => strftime("%Y-%m", new Date(element.date)) === date.format("YYYY-MM"));
    setMealsPerMonth(filteredMealsPerMonth);
  }, [mealsStats, date]);

  const allDaysInMonth = () => {
    let allDaysInMonthArr = [];
    for (let i = 1; i <= date.daysInMonth(); i += 1) {
      allDaysInMonthArr = [...allDaysInMonthArr, { name: strftime("%F", new Date(date.format("YYYY-MM-") + i)), totalCarbs: mealsPerMonth.filter((element) => strftime("%Y-%m-%d", new Date(element.date)) === (date.format("YYYY-MM-") + i)).map((element) => element.totalCarbs).reduce((a, b) => a + b, 0) }];
    }
    console.log("mdfsjgmfdojg");

    setTotalCarbsPerDay(allDaysInMonthArr);
  };

  useEffect(() => {
    allDaysInMonth();
  }, [mealsPerMonth]);

  const changeMonth = (nbMonth) => {
    const newDate = moment(date);
    newDate.add(nbMonth, "month");
    setDate(newDate);
  };

  return (
    <div>
      <div className="containerDashboard d-flex justify-content-between align-items-center">
        <div className="chevron">
          <FaChevronLeft onClick={() => changeMonth(-1)} />
        </div>
        <div className="displayDate">
          <h2>{date.locale("fr").format("MMMM YYYY")}</h2>
        </div>
        <div className="chevron">
          <FaChevronRight onClick={() => changeMonth(+1)} />
        </div>
      </div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={400}
            data={totalCarbsPerDay}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalCarbs" fill="red" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;
