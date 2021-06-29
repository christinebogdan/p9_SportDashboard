import React from "react";
import Infocard from "../components/infocard";
import "../styles/cards.scss";
import getData from "../helper/fetchData";

class CardsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
    this.state = { error: null, isLoaded: false, data: {} };
  }

  componentDidMount() {
    getData(this.user, this.endpoint).then((response) => {
      this.setState(response);
      console.log("Wert geholt");
    });
  }

  render() {
    console.log("Render", this.state);
    console.log("abc", this.state.data.keyData?.calorieCount);

    // why does this not hand the updated state to infocard component?
    // data={this.state.data.lipidCount}

    // this only works if this.state.isLoaded === true && ...
    return (
      // this.state.isLoaded && (
      <div className="cards">
        <Infocard
          user={this.user}
          topic="calorieCount"
          data={this.state.data.keyData?.calorieCount ?? "hello"}
        />
        <Infocard
          user={this.user}
          topic="proteinCount"
          data={this.state.data.keyData?.proteinCount}
        />
        <Infocard
          user={this.user}
          topic="carbohydrateCount"
          data={this.state.data.keyData?.carbohydrateCount}
        />
        <Infocard
          user={this.user}
          topic="lipidCount"
          data={this.state.data.keyData?.lipidCount}
        />
      </div>
      // )
    );
  }
}

export default CardsOverview;
