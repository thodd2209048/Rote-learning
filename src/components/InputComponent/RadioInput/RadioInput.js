import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./RadioInput.module.scss";
import RadioOption from "./RadioOption/RadioOption";

RadioInput.propTypes = {
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};

function RadioInput({ className, value, setValue, label, options, id }) {
  const classes = clsx(className, styles.wrapper);
  return (
    <div className={classes}>
      <label>{label} </label>
      <div className={clsx(styles.input)}>
        {options.map((option, idx) => (
          <RadioOption
            key={idx}
            value={value}
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
