import React from "react";
import PropTypes from "prop-types";

import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

Menu.propTypes = {};

function Menu(props) {
  return (
    <div className={clsx(styles.wrapper)}>
      <h1>Menu</h1>
      <Link to={"/addArticle"}>Add article</Link>
    </div>
  );
}

export default Menu;
