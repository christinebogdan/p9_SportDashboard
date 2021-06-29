import React from "react";
import { LineChart, XAxis, Tooltip, Line, ResponsiveContainer } from "recharts";
import "../styles/lineChart.scss";
import getData from "../helper/fetchData";

class ChartLine extends React.Component {
  constructor(props) {
    super(props);
    // how do I destructure this - do I need to use this?
    this.user = this.props.user;
    this.endpoint = this.props.endpoint;
    this.state = { error: null, isLoaded: false, data: {} };
  }

  componentDidMount() {
    getData(this.user, this.endpoint).then((response) => {
      this.setState(response);
    });
  }

  // how is this actually displayed over time? do the positions of week days change?

  /**
   * Formats tick to display initial of week day name
   * @param {number} day
   * @returns {string} Initial of the week day name
   */

  dayTickFormatter(day) {
    let week = { 1: "M", 2: "T", 3: "W", 4: "T", 5: "F", 6: "S", 7: "S" };
    let tick = week[day];
    return tick;
  }

  /**
   * Styles the tooltip with custom styling
   * @param {boolean} active - state of the tooltip (automatically handed to function by Tooltip component)
   * @param {Object} payload - object that includes the source data to be displayed in tooltip (automatically handed to function by Tooltip component)
   * @returns {HTMLDivElement} Div element containing the markup and custom styling
   */

  // why does this print more than the payload? why is this in an array?
  customTooltip({ active, payload }) {
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
          margin={{ top: 90, right: 0, left: 0, bottom: 16 }}
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
            tickMargin={5}
            interval="preserveStartEnd"
            // padding={{ left: 15, right: 15 }}
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
