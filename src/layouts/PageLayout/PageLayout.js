import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import clsx from "clsx";

import styles from "./PageLayout.module.scss";

PageLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

function PageLayout({ title, children }) {
  return (
    <div className={clsx(styles.wrapper, "container mt-3")}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default PageLayout;
