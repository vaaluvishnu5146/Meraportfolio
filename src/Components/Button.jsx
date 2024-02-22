import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.handleCounter}>{this.props.label}</button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string,
  handleCounter: PropTypes.func,
};

export default Button;
