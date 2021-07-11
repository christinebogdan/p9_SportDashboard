import "./App.css";
import React from "react";
import PropTypes from "prop-types";
import Nav from "./views/nav";
import Main from "./views/main";
import Aside from "./views/aside";
import Footer from "./views/footer";
import getData from "./helper/fetchData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
    this.state = { error: null, isLoaded: false, data: {} };
  }

  // why use componentDidMount here?
  // componentDidMount() {
  // fetch(this.endpoint)
  //   .then((res) => res.json())
  //   .then(
  //     (result) => {
  //       this.setState({ isLoaded: true, data: result.data });
  //     },
  //     // why it's important to handle errors here
  //     // instead of a catch() block so that we don't swallow
  //     // exceptions from actual bugs in components.
  //     (error) => {
  //       // what is simple error short for? error: error?
  //       this.setState({ isLoaded: true, error });
  //     }
  //   );
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