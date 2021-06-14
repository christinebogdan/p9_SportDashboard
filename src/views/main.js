import React from "react";
import Infocard from "../components/infocard";
import "../styles/main.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
  }
  render() {
    return (
      <main className="main">
        <h1 className="dashboard__greeting">
          Hello <span className="dashboard__name">{this.name}</span>
        </h1>
        <p className="dashboard__status">
          Congratulations, you've reached yesterday's goal!
        </p>
        <div className="cards">
          <Infocard />
        </div>
      </main>
    );
  }
}

export default Main;
