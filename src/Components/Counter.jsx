import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentWillMount() {
    console.log("Will mount");
  }

  componentDidMount() {
    console.log("Did Mount");
  }

  componentWillUpdate() {
    console.log(this.state);
  }

  componentDidUpdate() {
    alert("Count changing");
  }

  handleCounter = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <Button handleCounter={this.handleCounter} label="-" />
        <h1>{this.state.count}</h1>
        <Button handleCounter={this.handleCounter} label="+" />
      </>
    );
  }
}

Counter.propTypes = {};

export default Counter;
