import React, { useState } from "react";
import {
  Paper,
  Grid,
  TextField,
  Button,
  Stack,
  Box,
  Radio,
} from "@mui/material";
import CustomFormLabel from "./Custom/CustomFormLabel";
import PageContainer from "./Custom/PageContainer";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Registration() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [gender, setGender] = useState("");

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <PageContainer title="Registration">
          <Paper sx={{ p: 5, width: "50rem" }} elevation={10}>
            <h3>Registration</h3>
            <form>
              <Grid container columnSpacing={2}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ display: "flex" }}>
                    <CustomFormLabel htmlFor="name">
                      <span style={{ color: "red" }}>* </span>First Name
                    </CustomFormLabel>
                  </Box>
                  <TextField
                    id="name"
                    variant="outlined"
                    defaultValue={fname}
                    fullWidth
                    size="small"
                    onChange={(e) => setFname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ display: "flex" }}>
                    <CustomFormLabel htmlFor="name">
                      <span style={{ color: "red" }}>* </span>Last Name
                    </CustomFormLabel>
                  </Box>
                  <TextField
                    id="fname"
                    variant="outlined"
                    defaultValue={lname}
                    fullWidth
                    size="small"
                    onChange={(e) => setLname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ display: "flex" }}>
                    <CustomFormLabel htmlFor="name">
                      <span style={{ color: "red" }}>* </span>Email
                    </CustomFormLabel>
                  </Box>
                  <TextField
                    id="email"
                    type="email"
                    variant="outlined"
                    defaultValue={email}
                    fullWidth
                    size="small"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ display: "flex" }}>
                    <CustomFormLabel htmlFor="name">
                      <span style={{ color: "red" }}>* </span>Password
                    </CustomFormLabel>
                  </Box>
                  <TextField
                    type="password"
                    id="password"
                    variant="outlined"
                    defaultValue={pass}
                    fullWidth
                    size="small"
                    onChange={(e) => setPass(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomFormLabel htmlFor="name">
                    <span style={{ color: "red" }}>* </span>Gender
                  </CustomFormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={gender}
                  >
                    <Box sx={{ display: "flex" }}>
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                        onChange={(e) => setGender(e.target.value)}
                      />
                    </Box>
                  </RadioGroup>
                </Grid>
              </Grid>
            </form>
            <Stack spacing={4} direction="row" sx={{ mt: 3 }}>
              <Button variant="contained" onClick={"handleUpper"}>
                SingUp
              </Button>
            </Stack>
          </Paper>
        </PageContainer>
      </Box>
    </>
  );
}
