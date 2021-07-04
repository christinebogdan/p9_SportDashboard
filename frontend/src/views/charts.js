import React from "react";
import PropTypes from "prop-types";
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
            endpoint={"/average-sessions"}
          />
        </div>
        <div className={`chart radarchart`}>
          <Chart type="radarChart" user={this.user} endpoint={"/performance"} />
        </div>
        <div className={`chart radialchart`}>
          <h3 className="radialBarChart__headline">Score</h3>
          <Chart type="radialBarChart" user={this.user} />
        </div>
      </div>
    );
  }
}

export default Charts;

Charts.propTypes = {
  user: PropTypes.string.isRequired,
};
