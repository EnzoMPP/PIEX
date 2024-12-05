import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1325px",
  backgroundColor: "white",
  padding: "20px",
  boxShadow: 24,
  borderRadius: "8px",
};
const MedicalQuestionsModal = ({ open, onClose }) => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleClose = () => {
    onClose();
  };

  const handleSave = () => {
    console.log("Respostas salvas:", answers);
    alert("Respostas salvas!");
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" gutterBottom>
          Responda as perguntas abaixo
        </Typography>

        {/* Pergunta 1 */}
        <Typography variant="body1">
          Seu médico já disse que você possui um problema cardíaco e recomendou
          atividades físicas apenas sob supervisão médica?
        </Typography>
        <RadioGroup
          row
          name="question1"
          value={answers.question1}
          onChange={handleChange}
        >
          <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
          <FormControlLabel value="Não" control={<Radio />} label="Não" />
        </RadioGroup>

        {/* Pergunta 2 */}
        <Typography variant="body1">
          Você tem dor no peito provocada por atividades físicas?
        </Typography>
        <RadioGroup
          row
          name="question2"
          value={answers.question2}
          onChange={handleChange}
        >
          <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
          <FormControlLabel value="Não" control={<Radio />} label="Não" />
        </RadioGroup>

        {/* Pergunta 3 */}
        <Typography variant="body1">
          Você sentiu dor no peito no último mês?
        </Typography>
        <RadioGroup
          row
          name="question3"
          value={answers.question3}
          onChange={handleChange}
        >
          <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
          <FormControlLabel value="Não" control={<Radio />} label="Não" />
        </RadioGroup>

        {/* Pergunta 4 */}
        <Typography variant="body1">
          Você já perdeu a consciência em alguma ocasião ou sofreu alguma queda
          em virtude de tontura?
        </Typography>
        <RadioGroup
          row
          name="question4"
          value={answers.question4}
          onChange={handleChange}
        >
          <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
          <FormControlLabel value="Não" control={<Radio />} label="Não" />
        </RadioGroup>

        {/* Pergunta 5 */}
        <Typography variant="body1">
          Você tem algum problema ósseo ou articular que poderia agravar-se com
          a prática de atividades físicas?
        </Typography>
        <RadioGroup
          row
          name="question5"
          value={answers.question5}
          onChange={handleChange}
        >
          <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
          <FormControlLabel value="Não" control={<Radio />} label="Não" />
        </RadioGroup>

        {/* Pergunta 6 */}
        <Typography variant="body1">
          Algum médico já lhe prescreveu medicamento para pressão arterial ou
          para o coração?
        </Typography>
        <RadioGroup
          row
          name="question6"
          value={answers.question6}
          onChange={handleChange}
        >
          <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
          <FormControlLabel value="Não" control={<Radio />} label="Não" />
        </RadioGroup>

        {/* Pergunta 7 */}
        <Typography variant="body1">
          Você tem conhecimento, por informação médica ou pela própria
          experiência, de algum motivo que poderia impedi-lo de participar de
          atividades físicas sem supervisão médica?
        </Typography>
        <RadioGroup
          row
          name="question7"
          value={answers.question7}
          onChange={handleChange}
        >
          <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
          <FormControlLabel value="Não" control={<Radio />} label="Não" />
        </RadioGroup>

        {/* Botões */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
          <Button onClick={handleClose} color="error">
            Fechar
          </Button>
          <Button onClick={handleSave} color="primary" sx={{ marginLeft: 2 }}>
            Salvar Respostas
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default MedicalQuestionsModal;
