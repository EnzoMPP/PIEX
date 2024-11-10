import React from "react";
import DashboardGraph from "./DashboardGraph";
import NotesIcon from "@mui/icons-material/Notes";
import { IconButton, TextField } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import DashboardHeader from "./DashboardHeader";
import DashboardMassGraph from "./DashboardMassGraph";

const DashboardContainer = () => {
  return (
    <div>
      <DashboardHeader />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <IconButton aria-label="dropdown">
          <NotesIcon />
          <ArrowDropDown />
        </IconButton>
        <div>
          <TextField label="Anotações" variant="filled" />
          <IconButton sx={{ padding: "1rem" }} aria-label="adicionar">
            <AddIcon />
          </IconButton>
        </div>
      </div>
      <DashboardGraph />
      {/* <DashboardMassGraph /> */}
    </div>
  );
};

export default DashboardContainer;
