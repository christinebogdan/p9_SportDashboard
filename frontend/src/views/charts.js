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
          <h3 className="lineChart__headline">
            Average speed of <br />
            your sessions
          </h3>
          <Chart
            type="lineChart"
            user={this.user}
            endpoint={`http://localhost:3000/user/${this.user}/average-sessions`}
          />
        </div>
        <div className={`chart radarchart`}>
          <Chart
            type="radarChart"
            user={this.user}
            endpoint={`http://localhost:3000/user/${this.user}/performance`}
          />
        </div>
        <div className={`chart piechart`}>
          <h3 className="pieChart__headline">Score</h3>
          <Chart
            type="pieChart"
            user={this.user}
            endpoint={`http://localhost:3000/user/${this.user}`}
          />
        </div>
      </div>
    );
  }
}

export default Charts;
