import { PieChart } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  colors,
  styled,
  Typography,
} from "@mui/material";
import { useDrawingArea } from "@mui/x-charts";
import React from "react";
import PropTypes from "prop-types";

const DashboardMassGraph = () => {
  const data = [
    { label: "Massa magra", value: 50000 },
    { label: "Massa gorda", value: 35000 },
  ];

  const PieCenterLabel = (primaryText, secondaryText) => {
    const { width, height, left, top } = useDrawingArea();
    const primaryY = top + height / 2 - 10;
    const secondaryY = primaryY + 24;

    return (
      <React.Fragment>
        <StyledText variant="primary" x={left + width / 2} y={primaryY}>
          {primaryText}
        </StyledText>
        <StyledText variant="secondary" x={left + width / 2} y={secondaryY}>
          {secondaryText}
        </StyledText>
      </React.Fragment>
    );
  };

  PieCenterLabel.propTypes = {
    primaryText: PropTypes.string.isRequired,
    secondaryText: PropTypes.string.isRequired,
  };

  const StyledText = styled("text", {
    shouldForwardProp: (prop) => prop !== "variant",
  })(({ theme }) => ({
    textAnchor: "middle",
    dominantBaseline: "central",
    fill: (theme.vars || theme).palette.text.secondary,
    variants: [
      {
        props: {
          variant: "primary",
        },
        style: {
          fontSize: theme.typography.h5.fontSize,
        },
      },
      {
        props: ({ variant }) => variant !== "primary",
        style: {
          fontSize: theme.typography.body2.fontSize,
        },
      },
      {
        props: {
          variant: "primary",
        },
        style: {
          fontWeight: theme.typography.h5.fontWeight,
        },
      },
      {
        props: ({ variant }) => variant !== "primary",
        style: {
          fontWeight: theme.typography.body2.fontWeight,
        },
      },
    ],
  }));

  return (
    <Card
      variant="outlined"
      sx={{ display: "flex", flexDirection: "column", gap: "8px", flexGrow: 1 }}
    >
      <CardContent>
        <Typography component="h2" variant="subtitle2">
          Users by country
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PieChart
            colors={colors}
            margin={{
              left: 80,
              right: 80,
              top: 80,
              bottom: 80,
            }}
            series={[
              {
                data,
                innerRadius: 75,
                outerRadius: 100,
                paddingAngle: 0,
                highlightScope: { faded: "global", highlighted: "item" },
              },
            ]}
            height={260}
            width={260}
            slotProps={{
              legend: { hidden: true },
            }}
          >
            <PieCenterLabel primaryText="98.5K" secondaryText="Total" />
          </PieChart>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DashboardMassGraph;
