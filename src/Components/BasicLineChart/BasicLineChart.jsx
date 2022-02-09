import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const data = [
  {
    name: "Sun",

    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mon",

    pv: 1398,
    amt: 2210,
  },
  {
    name: "Tue",

    pv: 700,
    amt: 2290,
  },
  {
    name: "Wed",

    pv: 3908,
    amt: 2000,
  },
  {
    name: "Thu",

    pv: 4800,
    amt: 2181,
  },
  {
    name: "Fri",

    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sat",

    pv: 4300,
    amt: 2100,
  },
];
function BasicLineChart() {
  return (
    <Card
      sx={{
        minWidth: 275,
        borderRadius: "16px",
        boxShadow: "0px 0px 10px #0000001A",
      }}
    >
      <div className="px-2 pt-2">
        <b style={{ fontSize: "12px" }}>Sales Overview</b>
      </div>
      <CardContent>
        <LineChart data={data} width={350} height={150}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </CardContent>
    </Card>
  );
}

export default BasicLineChart;
