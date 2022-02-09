import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import { PieChart, Pie, Cell, Label } from "recharts";
const Piedata = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
function BasicPiechart() {
  return (
    <Card sx={{ borderRadius: "16px", boxShadow: "0px 0px 10px #0000001A" }}>
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
            <Label value="100%" position="center" />
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
  );
}

export default BasicPiechart;
