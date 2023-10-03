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
  const classes = clsx(className, styles.wrapper);

  return (
    <div className={classes}>
      <div className={clsx(styles.tag)} onClick={() => handleClick()}>
        {tagName} {children}
      </div>
    </div>
  );
}

export default Tag;
