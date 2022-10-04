import React, { Component } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export default class Newclass extends Component {
  constructor(props) {
    super(props);

    this.state = { color: 1, counter: 0, counterColor: "green" };

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

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/api/users/profileData/b12d76a5-000d-4627-b2f2-69e37bf19ca6"
      )
      .then((res) => {
        console.log(res);
      });
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // should be used with componentDidUpdate()
    if (prevState.counter !== this.state.counter) {
      console.log(true);
    }
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  changeColor = () => {
    this.setState({ color: this.state.color === 1 ? 2 : 1 });
  };

  static getDerivedStateFromProps(props, state) {
    if (props.counterColor !== state.counterColorprops) {
      return { counterColor: state.counterColor };
    }
  }
  render() {
    return (
      <>
        <Container maxWidth="sm">
          <h1 style={{ color: this.state.color === 1 ? "red" : "green" }}>
            my color is {this.state.color === 1 ? "Red" : "Green"}
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
