import React from "react";
import PropTypes from "prop-types";

import styles from "./Menu.module.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

Menu.propTypes = {};

function Menu({ className }) {
  const classes = clsx(className, styles.wrapper);

  const navLinkStyles = ({ isActive }) => {
    return isActive ? clsx(styles.active) : "";
  };

  return (
    <div className={classes}>
      <NavLink to={"/"} className={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to={"/addArticle"} className={navLinkStyles}>
        Add article
      </NavLink>

      <NavLink to={"/repetition"} className={navLinkStyles}>
        Repetition
      </NavLink>
      <NavLink to={"/random"} className={navLinkStyles}>
        Random
      </NavLink>
    </div>
  );
}

export default Menu;
