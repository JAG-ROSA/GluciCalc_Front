import React from "react";
import DaySummary from "components/DaySummary";
import SearchBar from "components/SearchBar";

const Dashboard = () => (
  <div className="Dashboard py-4">
    <SearchBar />
    <DaySummary />
  </div>
);

export default Dashboard;
