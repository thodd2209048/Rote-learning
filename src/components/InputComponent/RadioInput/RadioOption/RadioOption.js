import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./RadioOption.module.scss";

RadioOption.propTypes = {
  setValue: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

function RadioOption({ className, value, setValue, option, id }) {
  const classes = clsx(className, styles.wrapper);

  return (
    <div className={classes}>
      <label htmlFor={id + option}>{option}</label>
      <input
        type="radio"
        value={option}
        checked={value === option}
        id={id + option}
        name={id}
        onChange={() => {
          setValue(option);
        }}
      />
    </div>
  );
}

export default RadioOption;
