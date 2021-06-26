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

  componentDidMount() {
    fetch(this.endpoint)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ isLoaded: true, data: result?.data?.keyData });
        },

        (error) => {
          this.setState({ isLoaded: true, error });
        }
      );
  }
  render() {
    console.log(this.state.data);
    return (
      <div className="cards">
        <Infocard topic="calories" data={this.state.data.calorieCount} />
        <Infocard topic="protein" data={this.state.data.proteinCount} />
        <Infocard topic="carbs" data={this.state.data.carbohydrateCount} />
        <Infocard topic="lipids" data={this.state.data.lipidCount} />
      </div>
    );
  }
}

export default CardsOverview;
