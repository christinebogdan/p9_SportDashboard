import React from "react";
import "../styles/aside.scss";
import sit from "../images/iconsit.png";
import swim from "../images/iconswim.png";
import cycle from "../images/iconcycle.png";
import lift from "../images/iconlifting.png";

class Aside extends React.Component {
  render() {
    return (
      <aside className="aside">
        <div>
          <img src={sit} alt="" className="aside__icon"></img>
          <img src={swim} alt="" className="aside__icon"></img>
          <img src={cycle} alt="" className="aside__icon"></img>
          <img src={lift} alt="" className="aside__icon"></img>
        </div>
      </aside>
    );
  }
}

export default Aside;
