import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const StudentObservation = () => {
  const [inputValue, setInputValue] = useState("");
  const [addedValues, setAddedValues] = useState([]);

  const handleAddValue = () => {
    if (inputValue.trim()) {
      setAddedValues([...addedValues, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveValue = (valueToRemove) => {
    setAddedValues(addedValues.filter((value) => value !== valueToRemove));
  };

  return (
    <div style={{ width: "100%" }}>
      <TextField
        label="Anotações"
        variant="filled"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        slotProps={{ htmlInput: { maxLength: 100 } }}
      />
      <IconButton
        sx={{ padding: "1rem" }}
        aria-label="adicionar"
        onClick={handleAddValue}
        disabled={!inputValue.trim()}
        color="primary"
      >
        <AddIcon />
      </IconButton>
      {addedValues.length > 0 && (
        <Box fullWidth sx={{ marginTop: 3 }}>
          <Typography variant="h6">Observações do aluno</Typography>
          <List>
            {addedValues.map((value, index) => (
              <ListItem key={index}>
                <ListItemText primary={value} />
                <Button
                  sx={{ alignItems: "flex-end" }}
                  size="small"
                  color="error"
                  onClick={() => handleRemoveValue(value)}
                >
                  Remover
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </div>
  );
};

export default StudentObservation;
