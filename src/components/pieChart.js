import React from "react";
import PropTypes from "prop-types";
import { PieChart, Pie, Label, Cell, ResponsiveContainer } from "recharts";
import getData from "../helper/fetchData";

class ChartPie extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
    this.endpoint = this.props.endpoint;
    this.state = { error: null, isLoaded: false, data: {} };
  }

  componentDidMount() {
    getData(this.user, this.endpoint).then((response) => {
      this.setState(response);
    });
  }

  /**
   * Format data from API call to fit to Rechart's expected data format
   * @param {Object} data - the data received from the API call
   * @param {Number} data.todayScore - the daily score of the user
   * @returns {PieChartData}
   */
  formatData({ todayScore }) {
    console.log(todayScore);
    return [
      { name: "todayScore", value: todayScore },
      { name: "placeholder", value: 1 - todayScore },
    ];
  }

  formatLabel({ viewBox }) {
    const { cx, cy } = viewBox;

    return (
      <>
        <text x={cx - 27} y={cy + 35}>
          <tspan
            style={{
              fontWeight: 500,
              fontSize: "16px",
              fill: "#9B9EAC",
              fontFamily: "Roboto",
            }}
          >
            of your
          </tspan>
        </text>
        <text x={cx - 17} y={cy + 60}>
          <tspan
            style={{
              fontWeight: 500,
              fontSize: "16px",
              fill: "#9B9EAC",
              fontFamily: "Roboto",
            }}
          >
            goal
          </tspan>
        </text>
      </>
    );
  }

  render() {
    const dataInput = this.formatData(this.state.data);
    return (
      <ResponsiveContainer width="99%" height="99%" debounce={1}>
        <PieChart>
          <Pie
            data={dataInput}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={90}
            stroke="none"
            cornerRadius={10}
            startAngle={230}
            endAngle={-130}
          >
            {dataInput.map((entry, index) => {
              if (index === 0) {
                return <Cell key={`cell-${index}`} fill="#FF0000" />;
              }
              return <Cell key={`cell-${index}`} fill="rgba(255, 0, 0, 0.0)" />;
            })}
            <Label
              value={`${dataInput[0].value * 100}%`}
              position="center"
              fill="black"
              style={{
                fontSize: "26px",
                lineHeight: "26px",
                fontWeight: "bold",
                fontFamily: "Roboto",
              }}
            />
            <Label content={(a) => this.formatLabel(a, dataInput)} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default ChartPie;

ChartPie.propTypes = {
  user: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
};
