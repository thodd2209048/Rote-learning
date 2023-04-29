import React from "react";
import PropTypes from "prop-types";
import styles from "./DefaultLayout.module.scss";
import clsx from "clsx";

DefaultLayout.propTypes = {};

function DefaultLayout({ children }) {
  return (
    <div className={clsx(styles.wrapper)}>
      <h1 className={clsx(styles.header)}>Rote Learning</h1>
      <div className={clsx(styles.content)}>{children}</div>
    </div>
  );
}

export default DefaultLayout;
