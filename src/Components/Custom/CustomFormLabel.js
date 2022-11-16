import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const CustomFormLabel = styled((props) => (
  <Typography
    variant="h7"
    {...props}
    component="label"
    htmlFor={props.htmlFor}
  />
))(() => ({
  marginBottom: "5px",
  marginTop: "15px",
  display: "block",
}));

export default CustomFormLabel;
