import React from "react";
import Chart from "../components/chart";
import "../styles/charts.scss";

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
  }
  render() {
    return (
      <div className="charts">
        <div className={`chart linechart`}>
          <Chart type="lineChart" user={this.user} />
        </div>
        <div className={`chart radarchart`}>
          <Chart type="radarChart" user={this.user} />
        </div>
        <div className={`chart piechart`}>
          <h3 className="piechart__headline">Score</h3>
          <Chart type="pieChart" user={this.user} />
        </div>
      </div>
    );
  }
}

export default Charts;
