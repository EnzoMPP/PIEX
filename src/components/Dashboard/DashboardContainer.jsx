import React, { useState } from "react";
import DashboardGraph from "./DashboardGraph";
import NotesIcon from "@mui/icons-material/Notes";
import { Button, IconButton, TextField } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import DashboardHeader from "./DashboardHeader";
import DashboardMassGraph from "./DashboardMassGraph";
import MedicalQuestionsModal from "./MedicalQuestionsModal";

const DashboardContainer = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

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
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Formulário médico
      </Button>
      <MedicalQuestionsModal open={openModal} onClose={handleClose} />
    </div>
  );
};

export default DashboardContainer;
