import React from "react";
import PropTypes from "prop-types";
import styles from "./DefaultLayout.module.scss";
import clsx from "clsx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Menu from "./Menu/Menu";
import Button from "~/components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMartiniGlass,
} from "@fortawesome/free-solid-svg-icons";

DefaultLayout.propTypes = {};

function DefaultLayout({ children }) {
  const navigate = useNavigate();
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.topBar, "container-fluid")}>
        <Link to={"/"} className={clsx(styles.logo)}>
          ROTE LEARNING
        </Link>
        <Button
          className={clsx(styles.topBarBtn)}
          callToAction
          leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          onClick={() => navigate(`/filter`)}
        >
          Search
        </Button>
      </div>
      <div className={clsx(styles.content, ["container-fluid"])}>
        <div className={clsx(styles.menu)}>
          <Menu />
        </div>
        <div className={clsx(styles.mainContent)}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
