import React from "react";
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

class ChartBar extends React.Component {
  constructor(props) {
    super(props);
    this.endpoint = this.props.endpoint;
    this.user = this.props.user;
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
    const date = new Date(day);
    const dataKey = date.getDate();
    return dataKey;
  }

  renderLegendTextColor(value) {
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

  // was heißt das any? ist das destructuring? stand: {active, payload}: any
  // why do arguments need to be in {}
  customTooltip({ active, payload }) {
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
    return (
      <ResponsiveContainer width="99%" height="99%" debounce={1}>
        <BarChart data={this.state.data.sessions} barGap={8} barSize={7}>
          <CartesianGrid strokeDasharray="1 2" vertical={false} />
          <XAxis
            padding={{ left: 10, right: 10 }}
            scale="point"
            dataKey="day"
            tickFormatter={this.dayTickFormatter}
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
          <Tooltip
            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
            content={this.customTooltip}
          />
          <Legend
            iconSize={8}
            iconType="circle"
            verticalAlign="top"
            align="right"
            formatter={this.renderLegendTextColor}
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
