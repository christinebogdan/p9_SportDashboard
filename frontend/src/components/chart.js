import React from "react";
import "../styles/chart.scss";
import ChartBar from "../components/barChart";
import ChartPie from "./pieChart";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   LineChart,
//   CartesianGrid,
//   CartesianAxis,
//   XAxis,
//   YAxis,
//   Line,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
//   Radar,
//   RadialBarChart,
//   RadialBar,
//   Legend,
//   Tooltip,
// } from "recharts";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.user = this.props.user;
    this.endpoint = this.props.endpoint;
  }

  // dayTickFormatter(day) {
  //   const date = new Date(day);
  //   const dataKey = date.getDate();
  //   return dataKey;
  // }

  // renderLegendTextColor(value) {
  //   return (
  //     <span
  //       style={{
  //         color: "#74798C",
  //         paddingLeft: "10px",
  //         verticalAlign: "middle",
  //         fontSize: "14px",
  //         lineHeight: "24px",
  //         fontWeight: "500",
  //       }}
  //     >
  //       {value}
  //     </span>
  //   );
  // }

  // // was heißt das any? ist das destructuring? stand: {active, payload}: any
  // customTooltip({ active, payload }) {
  //   if (active && payload && payload.length) {
  //     console.log(payload);
  //     return (
  //       <div className="barChart__tooltip">
  //         <p className="barChart__tooltip-kg">{`${payload[0].value}kg`}</p>
  //         <p className="barChart__tooltip-cal">{`${payload[1].value}cKal`}</p>
  //       </div>
  //     );
  //   }
  //   return null;
  // }

  render() {
    if (this.type === "barChart") {
      return (
        <ChartBar user={this.user} endpoint={this.endpoint} />
        // <ResponsiveContainer>
        //   <BarChart
        //     data={this.data.sessions}
        //     barGap={8}
        //     barSize={7}
        //     width={730}
        //     height={230}
        //   >
        //     <CartesianGrid strokeDasharray="2 2" vertical={false} />

        //     <XAxis
        //       padding={{ left: 10, right: 10 }}
        //       scale="point"
        //       dataKey="day"
        //       tickFormatter={this.dayTickFormatter}
        //       tickLine={false}
        //       dy={16}
        //       axisLine={{ stroke: "#DEDEDE" }}
        //     />
        //     <YAxis
        //       orientation="right"
        //       tickLine={false}
        //       axisLine={false}
        //       dx={45}
        //     />
        //     <Tooltip
        //       // why always two {{}}
        //       cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
        //       content={this.customTooltip}
        //     />
        //     <Legend
        //       iconSize={8}
        //       iconType="circle"
        //       verticalAlign="top"
        //       align="right"
        //       formatter={this.renderLegendTextColor}
        //       // do this with padding here?
        //       wrapperStyle={{
        //         paddingBottom: "47px",
        //       }}
        //     />
        //     <Bar
        //       dataKey="kilogram"
        //       name="Weight (kg)"
        //       fill="#282D30"
        //       radius={[3, 3, 0, 0]}
        //     />
        //     <Bar
        //       dataKey="calories"
        //       name="Burned calories (kCal)"
        //       fill="#E60000"
        //       radius={[3, 3, 0, 0]}
        //     />
        //   </BarChart>
        // </ResponsiveContainer>
      );
    } else if (this.type === "lineChart") {
      return <div className="chart">LineChart</div>;
    } else if (this.type === "radarChart") {
      return <div className="chart">RadarChart</div>;
    } else if (this.type === "pieChart") {
      return <ChartPie user={this.user} className="chart" />;
    } else {
      return null;
    }
  }
}

export default Chart;
