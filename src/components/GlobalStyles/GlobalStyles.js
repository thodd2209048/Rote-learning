import React from "react";
// eslint-disable-next-line no-unused-vars
import styles from "./GlobalStyles.module.scss";

function GlobalStyles({ children }) {
  return React.Children.only(children);
}

export default GlobalStyles;
