import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./RadioInput.module.scss";
import RadioOption from "./RadioOption/RadioOption";

RadioInput.propTypes = {};

function RadioInput({ className, value, setValue, options, id }) {
  const classes = clsx(className, styles.wrapper);
  return (
    <div className={classes}>
      <label>Status: </label>
      <div className={clsx(styles.input)}>
        {options.map((option) => (
          <RadioOption
            setValue={setValue}
            option={option}
            id={id}
            className={clsx(styles.inputContainer)}
          />
        ))}
      </div>
    </div>
  );
}

export default RadioInput;
