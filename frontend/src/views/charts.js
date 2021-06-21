import React from "react";
import Chart from "../components/chart";
import "../styles/charts.scss";

class Charts extends React.Component {
  render() {
    return (
      <div className="charts">
        <Chart type="lineChart" />
        <Chart type="radarChart" />
        <Chart type="radialBarChart" />
      </div>
    );
  }
}

export default Charts;
