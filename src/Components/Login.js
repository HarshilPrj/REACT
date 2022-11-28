import React, { useState } from "react";
import { Paper, Grid, TextField, Button, Stack, Box } from "@mui/material";
import CustomFormLabel from "./Custom/CustomFormLabel";
import PageContainer from "./Custom/PageContainer";

export default function Registration(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleClick = () => {
    if (pass === "123") {
      props.showAlert("Login Successfully", "success");
    } else {
      props.showAlert("Invalid Password", "error");
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
        <PageContainer title="Login">
          <Paper sx={{ p: 5, width: "50rem" }} elevation={10}>
            <h3>Login</h3>
            <form>
              <Grid container columnSpacing={2}>
                <Grid item xs={12} md={6}>
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
                <Grid item xs={12} md={6}>
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
              </Grid>
            </form>
            <Stack spacing={4} direction="row" sx={{ mt: 3 }}>
              <Button variant="contained" onClick={handleClick}>
                Login
              </Button>
            </Stack>
          </Paper>
        </PageContainer>
      </Box>
    </>
  );
}
