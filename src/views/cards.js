import React from "react";
import PropTypes from "prop-types";
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
    });
  }

  render() {
    return (
      <div className="cards">
        <Infocard
          user={this.user}
          topic="calorieCount"
          data={this.state.data.keyData?.calorieCount}
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
    );
  }
}

export default CardsOverview;

CardsOverview.propTypes = {
  user: PropTypes.string.isRequired,
};
