import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Form(props) {
  const [text, setText] = useState("");

  let myStyle = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : "#a3a3c2",
    border: "2px solid",
    borderColor: props.mode === "light" ? "black" : "white",
    mt: 2,
    width: 600,
  };

  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if (text.length !== 0) {
      props.showAlert("Converted into Uppercase", "success");
    } else {
      props.showAlert("Invalid Input", "error");
    }
  };

  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if (text.length !== 0) {
      props.showAlert("Converted into Lowercase", "success");
    } else {
      props.showAlert("Invalid Input", "error");
    }
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
            id="outlined-basic"
            variant="outlined"
            sx={myStyle}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

          <h3
            style={{
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            {
              text.split(" ").filter((e) => {
                return e.length !== 0;
              }).length
            }{" "}
            Words
          </h3>
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
