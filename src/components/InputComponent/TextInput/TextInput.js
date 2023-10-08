import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./TextInput.module.scss";

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string,
};

function TextInput({
  className,
  value,
  onChangeValue,
  label,
  placeholder = "",
  id,
}) {
  const classes = clsx(className, styles.wrapper);

  return (
    <div className={classes}>
      <label htmlFor={id}>{label}</label>
      <div className={clsx(styles.input)}>
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChangeValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default TextInput;
