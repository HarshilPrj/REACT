import React from "react";
import Alert from "@mui/material/Alert";

export default function AlertNew(props) {
  return (
    <>
      {props.alert && (
        <Alert variant="filled" severity={`${props.alert.type}`}>
          <strong>{props.alert.msg}</strong>
        </Alert>
      )}
    </>
  );
}
