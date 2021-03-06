import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import moment from "moment";
import "moment/locale/fr";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import strftime from "strftime";

const StatsPerMonth = ({ mealsStats }) => {
  const dateYMD = (format, value) => strftime(format, new Date(value));

  const [date, setDate] = useState(moment());
  const [mealsPerMonth, setMealsPerMonth] = useState(mealsStats.filter((element) => dateYMD("%Y-%m", element.date) === date.format("YYYY-MM")));
  const [totalCarbsPerDay, setTotalCarbsPerDay] = useState();

  useEffect(() => {
    const filteredMealsPerMonth = mealsStats.filter((element) => dateYMD("%Y-%m", element.date) === date.format("YYYY-MM"));
    setMealsPerMonth(filteredMealsPerMonth);
  }, [mealsStats, date]);

  const allDaysInMonth = () => {
    let allDaysInMonthArr = [];
    for (let i = 1; i <= date.daysInMonth(); i += 1) {
      allDaysInMonthArr = [...allDaysInMonthArr, { date: i, glucides: (Math.round(mealsPerMonth.filter((element) => dateYMD("%Y-%m-%d", element.date) === (date.format("YYYY-MM-") + i)).map((element) => element.totalCarbs).reduce((a, b) => a + b, 0) * 100) / 100) }];
    }
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
          <h2 className="fs-3">{date.locale("fr").format("MMMM YYYY")}</h2>
        </div>
        <div className="chevron">
          <FaChevronRight onClick={() => changeMonth(+1)} />
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

export default StatsPerMonth;
