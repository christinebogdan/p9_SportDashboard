import React from "react";
import PropTypes from "prop-types";
import Greeting from "../components/greeting";
import DailyActivity from "../components/dailyActivity";
import Charts from "./charts";
import Cards from "./cards";
import "../styles/main.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
    this.name = this.props.name;
  }
  render() {
    return (
      <main className="main">
        <Greeting name={this.name} />
        <div className="main__content">
          <div className="chartsOverview">
            <DailyActivity user={this.user} />
            <Charts user={this.user} />
          </div>
          <Cards user={this.user} />
        </div>
      </main>
    );
  }
}

export default Main;

Main.propTypes = {
  user: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
