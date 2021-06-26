import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Label,
  Cell,
  ResponsiveContainer,
} from "recharts";

class ChartPie extends React.Component {
  constructor(props) {
    super(props);
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

  formatData(input) {
    let formattedData = [
      { name: "todayScore", value: input["todayScore"] },
      { name: "placeholder", value: 1 - input["todayScore"] },
    ];
    return formattedData;
  }

  // how can I use props and dataInput here?

  // formatLabel({ viewBox, dataInput = {} }) {
  //   const { cx, cy } = viewBox;

  //   console.log(viewBox);
  //   console.log(dataInput);

  //   return (
  //     <text x={cx - 15} y={cy - 5}>
  //       <tspan
  //         style={{
  //           fontWeight: 700,
  //           fontSize: "1.5em",
  //           fill: "#2B5CE7",
  //           fontFamily: "Roboto",
  //         }}
  //       >
  //         {dataInput}
  //       </tspan>
  //     </text>
  //   );
  // }

  formatLabel({ viewBox }) {
    const { cx, cy } = viewBox;

    return (
      <>
        <text x={cx - 28} y={cy + 35}>
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
    let dataInput = this.formatData(this.state.data);
    console.log(dataInput);
    return (
      <ResponsiveContainer>
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
            <Label content={this.formatLabel} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default ChartPie;
