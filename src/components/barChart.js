import React from "react";
import PropTypes from "prop-types";
import "../styles/barChart.scss";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
import getData from "../helper/fetchData";

class ChartBar extends React.Component {
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

  /**
   * Formats a date to only display the number of the day of the month
   * @param {string} day - Date of the day in format "yyyy-mm-dd"
   * @returns {number} The number of the day of the month
   */
  getDayFromDate(day) {
    const date = new Date(day);
    return date.getDate();
  }

  /**
   * Creates styled spans for the chart's legend text items
   * @param {string} value - Name of the corresponding bars
   * @returns {HTMLSpanElement} Span element wrapping the value param with styling
   */
  getLegendText(value) {
    return (
      <span
        style={{
          color: "#74798C",
          paddingLeft: "10px",
          verticalAlign: "middle",
          fontSize: "14px",
          lineHeight: "24px",
          fontWeight: "500",
        }}
      >
        {value}
      </span>
    );
  }

  /**
   * Creates styled div element for custom tooltip
   * @param {Object} event - Automatically handed to function by Tooltip component
   * @param {boolean} event.active - State of the tooltip
   * @param {Object[]} event.payload - The source data to be displayed in tooltip
   * @returns {HTMLDivElement | null} Div element containing the markup and custom styling or null
   */
  getCustomTooltipElement({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="barChart__tooltip">
          <p className="barChart__tooltip-kg">{`${payload[0].value}kg`}</p>
          <p className="barChart__tooltip-cal">{`${payload[1].value}kCal`}</p>
        </div>
      );
    }
    return null;
  }

  render() {
    // cursor not displayed despite cursor=true
    return (
      <ResponsiveContainer width="99%" height="99%" debounce={1}>
        <BarChart data={this.state.data.sessions} barGap={8} barSize={7}>
          <CartesianGrid strokeDasharray="1 2" vertical={false} />
          <XAxis
            padding={{ left: 10, right: 10 }}
            scale="point"
            dataKey="day"
            tickFormatter={this.getDayFromDate}
            tickLine={false}
            tick={{ transform: "translate(0,16)" }}
            axisLine={{ stroke: "#DEDEDE" }}
          />
          <YAxis
            orientation="right"
            tickLine={false}
            axisLine={false}
            tick={{ transform: "translate(30,0)" }}
          />
          {/* https://github.com/recharts/recharts/issues/2135 */}
          <Tooltip
            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
            content={this.getCustomTooltipElement}
          />
          <Legend
            iconSize={8}
            iconType="circle"
            verticalAlign="top"
            align="right"
            formatter={this.getLegendText}
            wrapperStyle={{
              paddingBottom: "47px",
            }}
          />
          <Bar
            dataKey="kilogram"
            name="Weight (kg)"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            dataKey="calories"
            name="Burned calories (kCal)"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
export default ChartBar;

ChartBar.propTypes = {
  endpoint: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
