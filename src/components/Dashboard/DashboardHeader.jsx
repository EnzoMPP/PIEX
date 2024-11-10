import { IconButton, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddAlertIcon from "@mui/icons-material/AddAlert";

const DashboardHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Aluno X
      </Typography>
      <div>
        <IconButton aria-label="pesquisar">
          <SearchIcon />
        </IconButton>
        <IconButton aria-label="teste">
          <AddAlertIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default DashboardHeader;
