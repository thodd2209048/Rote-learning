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

function RadioInput({ className, form, field, meta, label, options }) {
  return (
    <div
      className={clsx(
        className,
        styles.wrapper,
        "row d-flex flex-row justify-content-between"
      )}
    >
      {!!label && <label className="col-2 text-start">{label} </label>}
      <div className={clsx(styles.input, "col-10 d-flex gap-1")}>
        {options.map((option) => (
          <RadioOption
            key={option}
            // value={value}
            // onChangeValue={onChangeValue}
            option={option}
            className={clsx(styles.inputContainer)}
          />
        ))}
      </div>
    </div>
  );
}

export default RadioInput;
