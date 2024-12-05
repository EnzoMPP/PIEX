import React, { useState } from "react";
import DashboardGraph from "./DashboardGraph";
import NotesIcon from "@mui/icons-material/Notes";
import { Button, IconButton, TextField } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import DashboardHeader from "./DashboardHeader";
import DashboardMassGraph from "./DashboardMassGraph";
import MedicalQuestionsModal from "./MedicalQuestionsModal";
import DashboardGrowthGraph from "./DashboardGrowthGraph";
import StudentObservation from "./StudentObservation";

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
          width: "100%",
        }}
      >
        <StudentObservation />
        <div>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Formulário médico
          </Button>
          <MedicalQuestionsModal open={openModal} onClose={handleClose} />
        </div>
      </div>

      <DashboardGraph />
      <div style={{ display: "flex" }}>
        <DashboardMassGraph />
        <DashboardGrowthGraph />
      </div>
    </div>
  );
};

export default DashboardContainer;
