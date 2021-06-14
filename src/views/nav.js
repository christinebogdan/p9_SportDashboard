import React from "react";
import "../styles/nav.scss";
import logo from "../images/logo.svg";

class Nav extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="" className="header__logo"></img>
        <nav className="nav">
          <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Settings</li>
            <li>Community</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Nav;
