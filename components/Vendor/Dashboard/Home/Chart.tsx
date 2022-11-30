import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  {
    name: "NIG",
    uv: 25,
    amt: 2400,
  },
  {
    name: "ESP",
    uv: 40,
    amt: 2400,
  },
  {
    name: "NZL",
    uv: 30,
    amt: 2400,
  },
  {
    name: "GER",
    uv: 30,
    amt: 2400,
  },
  {
    name: "FRA",
    uv: 50,
    amt: 2400,
  },
  {
    name: "USA",
    uv: 20,
    amt: 2400,
  },
  {
    name: "NIG",
    uv: 55,
    amt: 2400,
  },
  {
    name: "NIG",
    uv: 25,
    amt: 2400,
  },
  {
    name: "ESP",
    uv: 40,
    amt: 2400,
  },
  {
    name: "NZL",
    uv: 30,
    amt: 2400,
  },
  {
    name: "GER",
    uv: 30,
    amt: 2400,
  },
  {
    name: "FRA",
    uv: 50,
    amt: 2400,
  },
];

export default function Chart() {
  const [widths, setWidths] = React.useState({
    fontSize: 10,
    barWidth: 8,
  });

  React.useEffect(() => {
    if (screen.width >= 1280) {
      setWidths({
        fontSize: 11,
        barWidth: 11,
      });
    } else {
      setWidths({
        fontSize: 10,
        barWidth: 8,
      });
    }
  }, []);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          left: -35,
          right: 0,
        }}
      >
        <CartesianGrid strokeOpacity={0.12} />
        <XAxis
          axisLine={false}
          dataKey="name"
          stroke="#4082E6"
          color="red"
          fontSize={widths.fontSize}
          tickLine={false}
        />
        <YAxis
          stroke="#4082E6"
          axisLine={{ stroke: "#E6E6E6" }}
          className="!text-white !bg-white"
          lightingColor="#fffff"
          fontSize={widths.fontSize}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            outline: "none",
            border: "0px solid white",
            boxShadow: "0px 0px 30px 3px rgba(0, 0, 0, 0.05)",
            borderRadius: "8px",
          }}
          wrapperStyle={{
            outline: "none",
            minWidth: "168px",
          }}
          labelStyle={{
            color: "#4082E6",
          }}
          itemStyle={{
            color: "#848383",
          }}
        />
        {/* <Legend /> */}
        <Bar
          dataKey="uv"
          barSize={widths.barWidth}
          fill="#82ca9d"
          className="!bg-white"
          shape={({ x, y, width, height }) => {
            return (
              <g>
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  rx="5"
                  ry="5"
                  fill="#82ca9d"
                />
              </g>
            );
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
