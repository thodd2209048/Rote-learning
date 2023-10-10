import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

function Button({
  to,
  href,
  children,
  className,
  onClick,
  callToAction,
  ...passProps
}) {
  const classes = clsx(
    className,
    styles.wrapper,
    callToAction && styles.callToAction
  );

  let Comp = "button";
  const props = {
    onClick,

    ...passProps,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
