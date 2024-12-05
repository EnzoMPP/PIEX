import { Card, CardContent, Typography } from "@mui/material";
import { Pie, Cell, Tooltip, Legend, PieChart } from "recharts";
import React from "react";

const DashboardMassGraph = () => {
  const data = [
    { name: "Massa Magra", value: 60 }, // Exemplo: 60% de massa magra
    { name: "Massa Gorda", value: 40 }, // Exemplo: 40% de massa gorda
  ];

  // Cores para as fatias do gráfico
  const COLORS = ["#4caf50", "#f44336"];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Composição Corporal
        </Typography>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </CardContent>
    </Card>
  );
};

export default DashboardMassGraph;
