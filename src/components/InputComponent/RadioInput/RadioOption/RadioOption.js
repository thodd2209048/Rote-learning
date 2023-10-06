import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./RadioOption.module.scss";

RadioOption.propTypes = {};

function RadioOption({ className, setValue, option, id }) {
  const classes = clsx(className, styles.wrapper);
  return (
    <div className={classes}>
      <label htmlFor={id + option}>{option}</label>
      <input
        type="radio"
        id={id + option}
        name={id}
        onClick={() => {
          setValue({ option });
        }}
      />
    </div>
  );
}

export default RadioOption;
