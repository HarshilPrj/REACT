import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  function handleClick() {
    setLoading(true);
    loading === true
      ? (document.body.style.backgroundColor = "black")
      : (document.body.style.backgroundColor = "white");
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              sx={{ color: "#fff" }}
              onClick={() => navigate("/darkmode")}
            >
              Home
            </Button>
            <Button sx={{ color: "#fff" }} onClick={() => navigate("/")}>
              About
            </Button>
            <Button sx={{ color: "#fff" }} onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button
              sx={{ color: "#fff" }}
              onClick={() => navigate("/registration")}
            >
              Registration
            </Button>
            <FormControlLabel
              sx={{
                right: 0,
                position: "absolute",
              }}
              control={
                <Switch
                  checked={loading}
                  onChange={() => setLoading(!loading)}
                  name="loading"
                  color="primary"
                  onClick={handleClick}
                />
              }
              label="Enable Darkmode"
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Appbar;
