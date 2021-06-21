import React from "react";
import "../styles/dailyActivity.scss";
import Chart from "../components/chart";

class DailyActivity extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
    this.endpoint = `http://localhost:3000/user/${this.user}/activity`;
    this.state = { error: null, isLoaded: false, data: {} };
  }

  componentDidMount() {
    fetch(this.endpoint)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ isLoaded: true, data: result.data });
        },

        (error) => {
          this.setState({ isLoaded: true, error });
        }
      );
  }

  render() {
    console.log(this.state.data);
    // why does this not render when h2 element is added into wrapper?
    return (
      <div className="dailyActivity">
        <Chart type="barChart" data={this.state.data} />
      </div>
    );
  }
}

export default DailyActivity;
