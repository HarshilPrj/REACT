import React, { Component } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export default class Newclass extends Component {
  constructor() {
    super();
    this.state = { color: "green", counter: 0, counterColor: "green" };

    this.increment = () => {
      this.setState({ counterColor: "green" });
      this.setState({ counter: this.state.counter + 1 });
    };
    this.decrement = () => {
      this.setState({ counterColor: "red" });
      this.setState({ counter: this.state.counter - 1 });
    };
  }
  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    this.setState({ color: "red" });
  };
  render() {
    return (
      <>
        <Container maxWidth="sm">
          <h1 style={{ color: this.state.color }}>
            my color is {this.state.color}
          </h1>
          <Button variant="contained" onClick={this.changeColor}>
            Change Color
          </Button>

          <h1>
            Counter :{" "}
            <span style={{ color: this.state.counterColor }}>
              {this.state.counter}
            </span>
          </h1>
          <Stack spacing={4} direction="row" sx={{ mt: 3 }}>
            <Button variant="contained" onClick={this.increment}>
              Increment
            </Button>
            <Button variant="contained" onClick={this.decrement}>
              Decrement
            </Button>
          </Stack>
        </Container>
      </>
    );
  }
}
