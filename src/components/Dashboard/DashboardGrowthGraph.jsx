import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

// Dados de exemplo: idade e peso
const data = [
  { age: 0, peso: 3.5 },
  { age: 1, peso: 10 },
  { age: 2, peso: 12 },
  { age: 3, peso: 14 },
  { age: 4, peso: 16 },
  { age: 5, peso: 18 },
  { age: 6, peso: 20 },
  { age: 7, peso: 22 },
  { age: 8, peso: 24 },
  { age: 9, peso: 26 },
  { age: 10, peso: 28 },
];

// Componente para exibir o gráfico
const DashboardGrowthGraph = () => {
  return (
    <Card style={{ width: "100%" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Curva de Crescimento (Idade vs Peso)
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="age"
              label={{
                value: "Idade (anos)",
                position: "insideBottomRight",
                offset: 0,
              }}
            />
            <YAxis
              label={{ value: "Peso (kg)", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="peso"
              stroke="#82ca9d"
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DashboardGrowthGraph;
