import React, { useState } from "react";
import { Button } from "react-bootstrap";
import StatsPerMonth from "./StatsPerMonth";
import StatsPerWeek from "./StatsPerWeek";

const Stats = ({ mealsStats }) => {
  const [currentStats, setCurrentStats] = useState(2);

  return (
    <div>
      <Button type="submit" onClick={() => setCurrentStats(1)}>Par mois</Button>
      <Button type="submit" onClick={() => setCurrentStats(2)}>Par semaine</Button>
      {currentStats === 1 && <StatsPerMonth mealsStats={mealsStats} />}
      {currentStats === 2 && <StatsPerWeek mealsStats={mealsStats} />}
    </div>
  );
};

export default Stats;
