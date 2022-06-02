import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Button = () => {
  return <div>Button</div>;
};

export default Button;

Button.propTypes = {
  type: propTypes.oneOf(["button", "Link"]),
  onclick: propTypes.func,
  target: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
};
