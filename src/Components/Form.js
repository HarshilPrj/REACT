import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Form(props) {
  const [text, setText] = useState("");

  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into Uppercase", "success");
  };

  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into Lowercase", "success");
  };
  return (
    <>
      <Box>
        <Container maxWidth="sm">
          <TextField
            value={text}
            multiline
            rows={8}
            fullWidth
            color="primary"
            id="outlined-basic"
            label="Enter the text.."
            variant="outlined"
            sx={{ mt: 2, width: 600 }}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <Stack spacing={4} direction="row" sx={{ mt: 3 }}>
            <Button variant="contained" onClick={handleUpper}>
              Uppercase
            </Button>
            <Button variant="contained" onClick={handleLower}>
              Lowercase
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
