import React from "react";
import DaySummary from "components/DaySummary";
import SearchBar from "components/SearchBar";

const Dashboard = () => (
  <div className="Dashboard">
    <SearchBar />
    <DaySummary />
  </div>
);

export default Dashboard;
