import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./RadioOption.module.scss";

RadioOption.propTypes = {};

function RadioOption({ className, checkedValue, option, handleClick }) {
  const classes = clsx(className, styles.wrapper);

  const optionStyle =
    checkedValue === option ? "btn-outline-primary" : "btn-outline-secondary ";

  return (
    <div className={classes}>
      <div
        className={clsx(
          styles.option,
          optionStyle,
          "btn btn-sm rounded-pill p-1 text-nowrap"
        )}
        onClick={() => handleClick(option)}
      >
        {option}
      </div>
    </div>
  );
}

export default RadioOption;
