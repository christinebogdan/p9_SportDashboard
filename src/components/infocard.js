import React from "react";
import PropTypes from "prop-types";
import calorieCount from "../images/calories-icon.png";
import carbohydrateCount from "../images/carbs-icon.png";
import lipidCount from "../images/fat-icon.png";
import proteinCount from "../images/protein-icon.png";
import "../styles/infocard.scss";

/**
 * A component to display an infocard containing either calories, proteins, carbs or lipids data
 * @component
 * @param {string} user - The user ID
 * @param {string} topic - The topic of the infocard (Calories, Proteins, Carbs or Lipids)
 * @param {number} data - The data of the respective topic
 * @return {ReactNode}
 */
class Infocard extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
    this.topic = this.props.topic;
    this.data = this.props.data;
    this.images = {
      calorieCount,
      proteinCount,
      carbohydrateCount,
      lipidCount,
    };
  }

  render() {
    return (
      <div className="card">
        <img src={this.images[this.topic]} alt="" className="card__image"></img>
        <div className="card__text">
          <p className="card__text--stat">
            {this.props.data !== undefined ? this.props.data : null}
          </p>
          <p className="card__text--cat">
            {this.topic === "calorieCount"
              ? "Calories"
              : this.topic === "proteinCount"
              ? "Proteins"
              : this.topic === "carbohydrateCount"
              ? "Carbs"
              : "Lipids"}
          </p>
        </div>
      </div>
    );
  }
}

export default Infocard;

Infocard.propTypes = {
  user: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  data: PropTypes.number,
};
