import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Tag.module.scss";

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
};

function Tag({ className, tagName, children }) {
  const classes = clsx(className, styles.wrapper);
  return (
    <div className={classes}>
      <div className={clsx(styles.tag)}>
        {tagName} {children}
      </div>
    </div>
  );
}

export default Tag;
