import { MenuItem, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { BarChart } from "@mui/x-charts/BarChart";
import React, { useState } from "react";

const DashboardGraph = () => {
  const theme = useTheme();
  const [state, setState] = useState(0);

  const colorPalette = [
    (theme.vars || theme).palette.primary.dark,
    (theme.vars || theme).palette.primary.main,
    (theme.vars || theme).palette.primary.light,
  ];

  const mes = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const dia = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];

  return (
    <Card variant="outlined" sx={{ width: "100%", marginTop: "2rem" }}>
      <CardContent>
        <Stack sx={{ justifyContent: "space-between" }}>
          <Stack
            direction="row"
            sx={{
              alignContent: {
                xs: "center",
                sm: "flex-start",
              },
              alignItems: "center",
              gap: 1,
              justifyContent: "space-between",
            }}
          >
            <Typography component="h2" variant="h5" gutterBottom>
              Presença
            </Typography>
            <TextField
              select
              id="mes"
              defaultValue=""
              label="Selecione o mês"
              sx={{ minWidth: 190 }}
            >
              {mes.map((x) => (
                <MenuItem key={x} value={x}>
                  {x}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Stack>
        <BarChart
          borderRadius={8}
          colors={colorPalette}
          xAxis={[
            {
              scaleType: "band",
              categoryGapRatio: 0.5,
              data: dia,
            },
          ]}
          series={[
            {
              id: "presença",
              label: "Presença",
              data: [1, 3, 2, 5, 7, 9, 8],
              stack: "A",
            },
            {
              id: "faltas",
              label: "Faltas",
              data: [3, 5, 8, 4, 1, 2, 7],
              stack: "A",
            },
          ]}
          height={250}
          margin={{ left: 50, right: 0, top: 20, bottom: 20 }}
          grid={{ horizontal: true }}
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default DashboardGraph;
