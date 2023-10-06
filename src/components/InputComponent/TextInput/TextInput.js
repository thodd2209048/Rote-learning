import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./TextInput.module.scss";

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
};

function TextInput({
  className,
  value,
  setValue,
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
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default TextInput;
