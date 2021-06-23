import React, { useState } from "react";
import Button from "components/Button";
import StatsPerMonth from "./StatsPerMonth";
import StatsPerWeek from "./StatsPerWeek";

const Stats = ({ mealsStats }) => {
  const [currentStats, setCurrentStats] = useState(2);

  return (
    <div>
      <Button styles="my-btn-secondary my-2 my-btn-sm me-4" content="Par mois" type="button" onAction={() => setCurrentStats(1)} />
      <Button styles="my-btn-secondary my-2 my-btn-sm" type="button" content="Par semaine" onAction={() => setCurrentStats(2)} />
      {currentStats === 1 && <StatsPerMonth mealsStats={mealsStats} />}
      {currentStats === 2 && <StatsPerWeek mealsStats={mealsStats} />}
    </div>
  );
};

export default Stats;
