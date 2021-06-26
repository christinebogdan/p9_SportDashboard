import React from "react";
import "../styles/dailyActivity.scss";
import Chart from "../components/chart";
// import ChartBar from "./barChart";

class DailyActivity extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
    this.endpoint = `http://localhost:3000/user/${this.user}/activity`;
    // this.state = { error: null, isLoaded: false, data: {} };
  }

  // componentDidMount() {
  //   fetch(this.endpoint)
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({ isLoaded: true, data: result.data });
  //       },

  //       (error) => {
  //         this.setState({ isLoaded: true, error });
  //       }
  //     );
  // }

  render() {
    // why does this not render when h2 element is added into wrapper?
    return (
      <div className="dailyActivity">
        <h2>Daily activity</h2>
        {/* <ChartBar input={this.state.data} /> */}
        <Chart type="barChart" user={this.user} endpoint={this.endpoint} />
      </div>
    );
  }
}

export default DailyActivity;
