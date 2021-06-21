import React from "react";
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
        <DailyActivity user={this.user} endpoint="activity" />
        <Charts user={this.user} />
        <Cards user={this.user} />
      </main>
    );
  }
}

export default Main;
