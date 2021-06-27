import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

class ChartLine extends React.Component {
  constructor(props) {
    super(props);
    // how do I destructure this - do I need to use this?
    this.user = this.props.user;
    this.endpoint = this.props.endpoint;
    this.state = { error: null, isLoaded: false, data: {} };
  }

  render() {
    console.log(this.state.data);
    return (
      <ResponsiveContainer width="99%" debounce={1}>
        <LineChart
          // width={730}
          // height={250}
          data={this.state.data.data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          style={{
            backgroundColor: "#FF0000",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)",
            borderRadius: "5px",
          }}
        >
          <CartesianGrid strokeDasharray="0 0" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default ChartLine;
