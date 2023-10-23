import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./RadioInput.module.scss";
import RadioOption from "./RadioOption/RadioOption";

RadioInput.propTypes = {
  onChangeValue: PropTypes.func.isRequired,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};

function RadioInput({ className, value, onChangeValue, label, options, id }) {
  return (
    <div
      className={clsx(
        className,
        styles.wrapper,
        "row d-flex flex-row justify-content-between"
      )}
    >
      {label && <label className="col-2 text-start">{label} </label>}
      <div className={clsx(styles.input, "col-10 d-flex gap-1")}>
        {options.map((option, idx) => (
          <RadioOption
            key={idx}
            value={value}
            onChangeValue={onChangeValue}
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
