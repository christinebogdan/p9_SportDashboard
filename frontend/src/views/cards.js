import React from "react";
import Infocard from "../components/infocard";
import "../styles/cards.scss";

class CardsOverview extends React.Component {
  render() {
    return (
      <div className="cards">
        <Infocard topic="calories" />
        <Infocard topic="carbs" />
        <Infocard topic="fat" />
        <Infocard topic="protein" />
      </div>
    );
  }
}

export default CardsOverview;
