import React from "react";
import PropTypes from "prop-types";
import "../styles/greeting.scss";

/**
 * A component to dynamically display the page's greeting with the user's first name
 * @component
 * @param {string} name - The user's first name
 * @return {ReactNode}
 */
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

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};
