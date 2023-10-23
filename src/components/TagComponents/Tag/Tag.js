import React, { useContext } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import styles from "./Tag.module.scss";

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

function Tag({ className, tagName, children, handleClick }) {
  return (
    <div className={clsx(className, styles.wrapper)}>
      <div
        className={clsx(styles.tag, "badge bg-secondary me-1")}
        onClick={handleClick}
      >
        {tagName} {children}
      </div>
    </div>
  );
}

export default Tag;
