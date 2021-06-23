import React from "react";
import StatsPerMonth from "./StatsPerMonth";
import StatsPerWeek from "./StatsPerWeek";

const Stats = ({ mealsStats }) => (
  <div>
    <StatsPerMonth mealsStats={mealsStats} />
    <StatsPerWeek mealsStats={mealsStats} />
  </div>
);

export default Stats;
