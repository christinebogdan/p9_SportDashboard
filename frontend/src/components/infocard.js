import React from "react";
import calorieCount from "../images/calories-icon.png";
import carbohydrateCount from "../images/carbs-icon.png";
import lipidCount from "../images/fat-icon.png";
import proteinCount from "../images/protein-icon.png";
import "../styles/infocard.scss";
import getData from "../helper/fetchData";

class Infocard extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
    this.topic = this.props.topic;
    this.state = { error: null, isLoaded: false, data: {} };
    this.images = {
      calorieCount,
      proteinCount,
      carbohydrateCount,
      lipidCount,
    };
  }

  // why can I not do this.props.data inside setState?
  // componentDidMount() {
  //   this.setState({this.props.data});
  //   console.log("component did mount");
  // }

  componentDidMount() {
    console.log("innen");
    getData(this.user, this.endpoint).then((response) => {
      this.setState(response);
    });
    console.log("außen");
  }

  render() {
    // sometimes pulls data, and sometimes doesn't - despite this.state - why did I
    // have to move api call into component?

    // difference between this and App.js format?
    console.log(this.state.data);
    return (
      <div className="card">
        <img src={this.images[this.topic]} alt="" className="card__image"></img>
        <div className="card__text">
          <p className="card__text--stat">
            {/* {this.state.data.keyData.proteinCount} */}
            {this.state.data.keyData !== undefined
              ? this.state.data.keyData[this.topic]
              : null}
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
