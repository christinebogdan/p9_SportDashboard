import "./App.css";
import React from "react";
import PropTypes from "prop-types";
import Nav from "./views/nav";
import Main from "./views/main";
import Aside from "./views/aside";
import Footer from "./views/footer";
import getData from "./helper/fetchData";

/**
 * A component that encapsulates the entire frontend
 * @component
 * @param {string} user - The user ID
 * @return {ReactNode}
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
    this.state = { error: null, isLoaded: false, data: {} };
  }

  /**
   * Fetches data from the respective endpoint and stores the response in the component's state.
   */
  componentDidMount() {
    getData(this.user, this.endpoint).then((response) => {
      this.setState(response);
    });
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="app">
          <Nav />
          <Main user={this.user} name={data?.userInfos?.firstName} />
          <Aside />
          <Footer />
        </div>
      );
    }
  }
}

export default App;

App.propTypes = {
  user: PropTypes.string.isRequired,
};
