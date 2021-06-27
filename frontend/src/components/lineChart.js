import React from "react";
import { LineChart, XAxis, Tooltip, Line, ResponsiveContainer } from "recharts";
import "../styles/lineChart.scss";

class ChartLine extends React.Component {
  constructor(props) {
    super(props);
    // how do I destructure this - do I need to use this?
    this.user = this.props.user;
    this.endpoint = this.props.endpoint;
    this.state = { error: null, isLoaded: false, data: {} };
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

  dayTickFormatter(day) {
    let week = { 1: "M", 2: "T", 3: "W", 4: "T", 5: "F", 6: "S", 7: "S" };
    let tick = week[day];
    return tick;
  }

  // why does this print more than the payload? why is this in an array?
  customTooltip({ active, payload }) {
    console.log(payload);
    if (active && payload && payload.length) {
      return (
        <div className="lineChart__tooltip">
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <ResponsiveContainer width="99%" height="99%" debounce={1}>
        <LineChart
          margin={{ top: 0, right: 0, left: 0, bottom: 16 }}
          data={this.state.data.sessions}
          style={{
            background:
              "linear-gradient(to right, #FF0000 72%, #E60001 72% 100%)",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)",
            borderRadius: "5px",
          }}
        >
          <defs>
            <linearGradient id="linear">
              <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="100%" stopColor="rgba(255,255,255,1)" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickFormatter={this.dayTickFormatter}
            tick={{
              fill: "rgba(255,255,255,0.5)",
              fontSize: "12px",
              fontWeight: "500",
              lineHeight: "24px",
            }}
            interval="preserveStartEnd"
            padding={{ left: 15, right: 15 }}
          />
          <Tooltip content={this.customTooltip} offset={5} cursor={false} />
          <Line
            type="basis"
            dataKey="sessionLength"
            strokeWidth={2}
            stroke="url('#linear')"
            dot={false}
            activeDot={{
              r: 4,
              fill: "white",
              strokeWidth: 8,
              stroke: "rgba(255, 255, 255, 0.23)",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default ChartLine;
