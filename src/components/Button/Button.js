import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Button = props => {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isBlock) className.push("btn-block");
  if (props.isLight) className.push("btn-light");
  if (props.isSmall) className.push("btn-sm");
  if (props.isLarge) className.push("btn-lg");
  if (props.hasShadow) className.push("btn-shadow"); // make custom shadow

  const onclick = () => {
    if (props.onclick) onclick();
  };

  // konfigurasi button disable dan loading
  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5" />
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  // konfigurasi button link (a href)
  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          style={props.style}
          className={className.join(" ")}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onclick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onclick}
    >
      {props.children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onclick: propTypes.func,
  target: propTypes.string,
  className: propTypes.string,
  href: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isPrimary: propTypes.bool,
  isExternal: propTypes.bool, // jika true maka mengarah keluar website (menggunakan <a href>)
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isLight: propTypes.bool,
  hasShadow: propTypes.bool,
};
