import React from "react";
import PropTypes from "prop-types";

import "../styles/chart.scss";
import ChartBar from "../components/barChart";
import ChartRadar from "./radarChart";
import ChartLine from "./lineChart";
import ChartRadialBar from "./radialBarChart";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.user = this.props.user;
    this.endpoint = this.props.endpoint;
  }
  // use enum
  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  // optionalEnum: PropTypes.oneOf(['News', 'Photos']),

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
  endpoint: PropTypes.string.isRequired,
};
