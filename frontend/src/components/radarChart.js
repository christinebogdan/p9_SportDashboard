import React from "react";
import PropTypes from "prop-types";
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
    this.state = {
      error: null,
      isLoaded: false,
      data: {},
      isSmall: window.innerWidth < 1300 ? true : false,
    };
  }

  componentDidMount() {
    getData(this.user, this.endpoint).then((response) => {
      this.setState(response);
    });

    /**
     * Sets the isSmall key to true or false depending on window's inner width
     * @param {window#event:resize} event
     * @listens window#resize
     */
    const handleResize = () => {
      this.setState({ isSmall: window.innerWidth < 1465 ? true : false });
    };

    window.addEventListener("resize", handleResize);
  }

  /**
   * Format data from API call to fit to Rechart's expected data format
   * @param {Object} data - The data received from the API call
   * @param {Object} data.kind - Object containing the names for each kind of workout
   * @param {Object[]} - Array containing the values for each kind of workout in two key value pairs
   * @returns {Object[]} Formatted data including placeholder value to allow one value to be displayed as bar without using 100%
   */
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

    return dataInput.length > 0 ? (
      <ResponsiveContainer width="99%" height="99%" debounce={1}>
        <RadarChart
          outerRadius={this.state.isSmall ? "60%" : "70%"}
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
    ) : null;
  }
}

export default ChartRadar;

ChartRadar.propTypes = {
  user: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
};
