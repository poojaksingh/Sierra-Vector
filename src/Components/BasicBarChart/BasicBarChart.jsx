import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
const BarData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
function BasicBarChart() {
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
        <BarChart width={500} height={150} data={BarData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" barSize={5} />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" barSize={1} />
        </BarChart>
      </CardContent>
    </Card>
  );
}

export default BasicBarChart;
