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
  PieChart,
  Pie,
  Sector,
  Cell,
  BarChart,
  Bar,
  text,
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

    pv: 9800,
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
const Piedata = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function LineChartSample() {
  return (
    <>
      <div className="conatiner-fluid">
        <div className="row">
          <div className="col-7 pb-3">
            <Card sx={{ minWidth: 275, borderRadius: "12px" }}>
              <div className="px-2 pt-2">
                <b style={{ fontSize: "12px" }}>Sales Overview</b>
              </div>
              <CardContent>
                <BarChart
                  width={500}
                  height={300}
                  data={BarData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
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
          </div>
          <div className="col-5 pb-3">
            <Card sx={{ minWidth: 275, borderRadius: "12px" }}>
              <div className="px-2 pt-2">
                <b style={{ fontSize: "12px" }}>Sales Overview</b>
              </div>
              <CardContent>
                <LineChart data={data} width={350} height={150}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" Analytics />
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
          </div>
        </div>
        <div className="row">
          <div className="col-7 pb-3">
            <Card sx={{ minWidth: 275, borderRadius: "12px" }}>
              <div className="px-2 pt-2">
                <b style={{ fontSize: "12px" }}>Sales Overview</b>
              </div>
              <CardContent>
                <LineChart data={data} width={550} height={150}>
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
          </div>
          <div className="col-5 pb-3">
            <Card sx={{ minWidth: 275, borderRadius: "12px" }}>
              <div className="px-2 pt-2">
                <b style={{ fontSize: "12px" }}>Sales Overview</b>
              </div>
              <CardContent>
                <PieChart width={200} height={150}>
                  <Pie
                    data={Piedata}
                    cx={90}
                    cy={70}
                    innerRadius={50}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    <text x={90} y={70} textAnchor="middle">
                      110%
                    </text>
                    {Piedata.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default LineChartSample;
