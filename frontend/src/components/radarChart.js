import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import getData from "../helper/fetchData";

class ChartRadar extends React.Component {
  constructor(props) {
    super(props);
    this.endpoint = this.props.endpoint;
    this.user = this.props.user;
    this.state = { error: null, isLoaded: false, data: {} };
  }

  componentDidMount() {
    getData(this.user, this.endpoint).then((response) => {
      this.setState(response);
    });
  }

  formatData({ kind, data }) {
    let formattedData = [];
    if (data) {
      formattedData = data.map((entry, index) => {
        return {
          value: entry.value,
          kind:
            kind[entry.kind].charAt(0).toUpperCase() +
            kind[entry.kind].slice(1),
        };
      });
    }
    return formattedData;
  }

  render() {
    let dataInput = this.formatData(this.state.data);
    return (
      <ResponsiveContainer width="99%" height="99%" debounce={1}>
        <RadarChart
          outerRadius={90}
          // width={730}
          // height={250}
          data={dataInput}
          style={{
            backgroundColor: "#282D30",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)",
            borderRadius: "5px",
          }}
        >
          <PolarAngleAxis
            dataKey="kind"
            tick={{
              fill: "#FFFFFF",
              fontWeight: "500",
              fontSize: "12px",
              lineHeigt: "24px",
            }}
          />
          <PolarGrid gridType="polygon" radialLines={false} />
          <Radar dataKey="value" fill="rgba(255, 1, 1, 0.7)" />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}

export default ChartRadar;
