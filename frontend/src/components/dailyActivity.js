import React from "react";
import "../styles/dailyActivity.scss";
import Chart from "../components/chart";

class DailyActivity extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
    this.endpoint = `http://localhost:3000/user/${this.user}/activity`;
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
