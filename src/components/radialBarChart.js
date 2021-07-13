import React from "react";
import PropTypes from "prop-types";
import {
  RadialBarChart,
  ResponsiveContainer,
  RadialBar,
  Legend,
  Cell,
} from "recharts";
import getData from "../helper/fetchData";

class ChartRadialBar extends React.Component {
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
   * @param {Object} data - The data received from the API call
   * @returns {Object[]} Formatted data including placeholder value to allow one value to be displayed as bar without using 100%
   */
  formatData(data) {
    const score = data.todayScore ?? data.score;
    return [
      { name: "todayScore", value: score },
      { name: "placeholder", value: 1 },
    ];
  }

  /**
   * Creates styled div and spans for the chart's legend text item
   * @param {Object[]} dataInput - Object containing the data for the bar charts
   * @returns {HTMLDivElement} Div element wrapping the legend with styling
   */
  getFormattedLegend(dataInput) {
    return (
      <div
        style={{
          position: "absolute",
          height: "120px",
          width: "60px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "26px",
            lineHeight: "36px",
            margin: "0",
          }}
        >{`${dataInput[0].value * 100}%`}</p>
        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "16px",
            color: "#74798C",
            lineHeight: "20px",
            margin: "0",
          }}
        >
          of your
        </p>
        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "16px",
            color: "#74798C",
            lineHeight: "20px",
            margin: "0",
          }}
        >
          goal
        </p>
      </div>
    );
  }

  render() {
    const dataInput = this.formatData(this.state.data);
    return (
      <ResponsiveContainer width="99%" height="99%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="90%"
          barSize={20}
          data={dataInput}
          startAngle={220}
          endAngle={-210}
        >
          <RadialBar
            minAngle={15}
            clockWise
            dataKey="value"
            fill="#FF0000"
            cornerRadius={10}
          >
            {dataInput.map((entry, index) => {
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 0 ? "#FF0000" : "rgba(255, 0, 0, 0)"}
                  // fill={`rgba(255, 0, 0, ${index === 0 ? 1 : 0}`}
                />
              );
            })}
          </RadialBar>
          <Legend
            wrapperStyle={{
              position: "absolute",
              top: "calc(50% - 60px)",
              left: "calc(50% - 30px)",
            }}
            content={() => this.getFormattedLegend(dataInput)}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}

export default ChartRadialBar;

ChartRadialBar.propTypes = {
  user: PropTypes.string.isRequired,
  endpoint: PropTypes.string,
};
