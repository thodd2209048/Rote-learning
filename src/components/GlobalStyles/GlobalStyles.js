import React from "react";
import PropTypes from "prop-types";
import styles from "./GlobalStyles.module.scss";

GlobalStyles.propTypes = {};

function GlobalStyles({ children }) {
  return React.Children.only(children);
}

export default GlobalStyles;
