import React from "react";
import PropTypes from "prop-types";
import styles from "./DefaultLayout.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

DefaultLayout.propTypes = {};

function DefaultLayout({ children }) {
  return (
    <div className={clsx(styles.wrapper)}>
      <Link to={"/"} className={clsx(styles.header)}>
        ROTE LEARNING
      </Link>
      <div className={clsx(styles.content)}>{children}</div>
    </div>
  );
}

export default DefaultLayout;
