import React from "react";
import calories from "../images/calories-icon.png";
import carbs from "../images/carbs-icon.png";
import lipids from "../images/fat-icon.png";
import protein from "../images/protein-icon.png";
import "../styles/infocard.scss";

//key-data

class Infocard extends React.Component {
  constructor(props) {
    super(props);
    this.topic = this.props.topic;
    this.data = this.props.data;

    this.images = {
      calories,
      carbs,
      lipids,
      protein,
    };
  }

  // formatCatText(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  render() {
    return (
      <div className="card">
        <img
          src={this.images[this.props.topic]}
          alt=""
          className="card__image"
        ></img>
        <div className="card__text">
          <p className="card__text--stat">{this.data}</p>
          <p className="card__text--cat">
            {this.topic.charAt(0).toUpperCase() + this.topic.slice(1)}
          </p>
        </div>
      </div>
    );
  }
}

export default Infocard;
