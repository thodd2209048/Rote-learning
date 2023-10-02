import React from "react";
import PropTypes from "prop-types";

import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

Menu.propTypes = {};

function Menu({ className }) {
  const classes = clsx(className, styles.wrapper);
  return (
    <div className={classes}>
      <h1>Menu</h1>
      <Link to={"/addArticle"}>Add article</Link>
    </div>
  );
}

export default Menu;
