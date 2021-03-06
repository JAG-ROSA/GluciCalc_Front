/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import moment from "moment";
import "moment/locale/fr";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import strftime from "strftime";

const StatsPerWeek = ({ mealsStats }) => {
  const dateYMD = (format, value) => strftime(format, new Date(value));

  const [date, setDate] = useState(moment());
  const [mealsPerWeek, setMealsPerWeek] = useState(mealsStats.filter((element) => moment(dateYMD("%Y-%m-%d", element.date)).week() == date.format("W")));
  const [totalCarbsPerDay, setTotalCarbsPerDay] = useState();

  useEffect(() => {
    const filteredMealsPerWeek = mealsStats.filter((element) => moment(dateYMD("%Y-%m-%d", element.date)).week() == date.format("W"));
    setMealsPerWeek(filteredMealsPerWeek);
  }, [mealsStats, date]);

  const allDaysInWeek = () => {
    let allDaysInWeekArr = [];
    for (let i = 1; i <= 7; i += 1) {
      allDaysInWeekArr = [...allDaysInWeekArr, { date: Number(date.startOf("week").day(i).format("D")), glucides: (Math.round(mealsPerWeek.filter((element) => dateYMD("%Y-%m-%d", element.date) === (date.format("YYYY-MM-") + Number(date.startOf("week").day(i).format("D")))).map((element) => element.totalCarbs).reduce((a, b) => a + b, 0) * 100) / 100) }];
    }
    setTotalCarbsPerDay(allDaysInWeekArr);
  };

  useEffect(() => {
    allDaysInWeek();
  }, [mealsPerWeek]);

  const changeWeek = (nbWeek) => {
    const newDate = moment(date);
    newDate.add(nbWeek, "week");
    setDate(newDate);
  };

  return (
    <div>
      <div className="containerDashboard d-flex justify-content-between align-items-center text-center">
        <div className="chevron">
          <FaChevronLeft className onClick={() => changeWeek(-1)} />
        </div>
        <div className="displayDate">
          <h2 className="fs-3">
            semaine
            {" "}
            {date.locale("fr").format("W")}
          </h2>
          <h3 className="fs-5">
            {" "}
            {date.startOf("week").locale("fr").format("DD MMMM YYYY")}
            {" - "}
            {date.endOf("week").locale("fr").format("DD MMMM YYYY")}
          </h3>
        </div>
        <div className="chevron">
          <FaChevronRight onClick={() => changeWeek(+1)} />
        </div>
      </div>
      {typeof totalCarbsPerDay !== "undefined" && (
      <div style={{ width: "100%", height: 500 }}>
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={500}
            data={totalCarbsPerDay}
            margin={{
              top: 15,
              right: -10,
              left: -15,
              bottom: 25,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              label={{
                value: "jour", dy: 15,
              }}
            />
            <YAxis label={{
              value: "gramme", angle: -90, dx: -10,
            }}
            />
            <Tooltip />
            <Legend wrapperStyle={{
              bottom: 0,
              lineHeight: "24px",
            }}
            />
            <Bar dataKey="glucides" name="Total des glucides (g)" fill="#C6611D" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      )}
    </div>
  );
};

export default StatsPerWeek;
