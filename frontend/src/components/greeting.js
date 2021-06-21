import React from "react";
import "../styles/greeting.scss";

class Greeting extends React.Component {
  render() {
    return (
      <div className="greeting">
        <h1 className="greeting__text">
          Hello <span className="greeting__text--name">{this.props.name}</span>
        </h1>
        <p className="greeting__status">
          Congratulations, you've reached yesterday's goal!
        </p>
      </div>
    );
  }
}

export default Greeting;
