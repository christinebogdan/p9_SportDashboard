import React from "react";
import PropTypes from "prop-types";

import "../styles/chart.scss";
import ChartBar from "../components/barChart";
import ChartRadar from "./radarChart";
import ChartLine from "./lineChart";
import ChartRadialBar from "./radialBarChart";

/**
 * A component that determines what type of chart is to be displayed.
 * @component
 * @param {string} endpoint - The endpoint for the API call
 * @param {string} user - The user ID
 * @param {type} type - The type of chart to be displayed, i.e. barChart, lineChart, radarChart or radialBarChart.
 * @return {ReactNode}
 */
class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.user = this.props.user;
    this.endpoint = this.props.endpoint;
  }

  render() {
    switch (this.type) {
      case "barChart":
        return <ChartBar user={this.user} endpoint={this.endpoint} />;
      case "lineChart":
        return <ChartLine user={this.user} endpoint={this.endpoint} />;
      case "radarChart":
        return <ChartRadar user={this.user} endpoint={this.endpoint} />;
      case "radialBarChart":
        return <ChartRadialBar user={this.user} endpoint={this.endpoint} />;
      default:
        return null;
    }
  }
}

export default Chart;

Chart.propTypes = {
  type: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  endpoint: PropTypes.string,
};
