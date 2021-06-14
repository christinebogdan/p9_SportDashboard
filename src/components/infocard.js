import React from "react";
import calories from "../images/calories-icon.png";
import carbs from "../images/carbs-icon.png";
import fat from "../images/fat-icon.png";
import protein from "../images/protein-icon.png";
import "../styles/infocard.scss";

class Infocard extends React.Component {
  constructor(props) {
    super(props);
    this.topic = {
      calories: calories,
      carbs: carbs,
      fat: fat,
      protein: protein,
    };
  }
  render() {
    return (
      <div className="card">
        <img src={this.topic.calories} alt="" className="card__image"></img>
        <div className="card__text">
          <p className="card__text--stat">1,930kCal</p>
          <p className="card__text--cat">Calories</p>
        </div>
      </div>
    );
  }
}

export default Infocard;
