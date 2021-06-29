import React from "react";
import Infocard from "../components/infocard";
import "../styles/cards.scss";

class CardsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
    this.endpoint = `http://localhost:3000/user/${this.user}`;
    this.state = { error: null, isLoaded: false, data: {} };
  }

  render() {
    // why does this not hand the updated state to infocard component?
    // data={this.state.data.lipidCount}

    return (
      <div className="cards">
        <Infocard user={this.user} topic="calorieCount" />
        <Infocard user={this.user} topic="proteinCount" />
        <Infocard user={this.user} topic="carbohydrateCount" />
        <Infocard user={this.user} topic="lipidCount" />
      </div>
    );
  }
}

export default CardsOverview;
