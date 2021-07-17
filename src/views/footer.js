import React from "react";
import "../styles/footer.scss";

/**
 * A component that renders the footer element
 * @component
 * @return {ReactNode}
 */
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <p className="footer__content">Copyright, SportSee 2020</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
