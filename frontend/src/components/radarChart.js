import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";

class ChartRadar extends React.Component {
  constructor(props) {
    super(props);
    this.endpoint = this.props.endpoint;
    this.user = this.props.user;
    this.state = { error: null, isLoaded: false, data: {} };
    this.data = [
      {
        subject: "Math",
        A: 120,
        B: 110,
        fullMark: 150,
      },
      {
        subject: "Chinese",
        A: 98,
        B: 130,
        fullMark: 150,
      },
      {
        subject: "English",
        A: 86,
        B: 130,
        fullMark: 150,
      },
      {
        subject: "Geography",
        A: 99,
        B: 100,
        fullMark: 150,
      },
      {
        subject: "Physics",
        A: 85,
        B: 90,
        fullMark: 150,
      },
      {
        subject: "History",
        A: 65,
        B: 85,
        fullMark: 150,
      },
    ];
  }

  componentDidMount() {
    fetch(this.endpoint)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ isLoaded: true, data: result.data });
        },

        (error) => {
          this.setState({ isLoaded: true, error });
        }
      );
  }

  formatData(input) {
    if (input.length) {
      input.map((entry, index) => {
        return (entry["kind"] = input["kind"][index + 1]);
      });
    }
  }

  render() {
    // this.formatData(this.state.data.data);
    console.log(this.state.data.data);
    return (
      <ResponsiveContainer width="99%" debounce={1}>
        <RadarChart
          outerRadius={90}
          width={730}
          height={250}
          data={this.state.data.data}
          style={{
            backgroundColor: "#282D30",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)",
            borderRadius: "5px",
          }}
        >
          <PolarGrid gridType="polygon" radialLines={false} />
          <Radar dataKey="value" fill="rgba(255, 1, 1, 0.7)" />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}

export default ChartRadar;
