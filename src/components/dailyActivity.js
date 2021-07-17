import React from "react";
import PropTypes from "prop-types";
import "../styles/dailyActivity.scss";
import Chart from "../components/chart";

/**
 * A component that encapsulates the bar Chart and is responsible for its styling
 * @component
 * @param {string} user - The user ID
 * @return {ReactNode}
 */
class DailyActivity extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
  }

  render() {
    return (
      <div className="dailyActivity">
        <h2>Daily activity</h2>
        <Chart type="barChart" user={this.user} endpoint="/activity" />
      </div>
    );
  }
}

export default DailyActivity;

DailyActivity.propTypes = {
  user: PropTypes.string.isRequired,
};
